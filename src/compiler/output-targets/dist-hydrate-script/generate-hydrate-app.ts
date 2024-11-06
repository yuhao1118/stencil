import type * as d from '@stencil/core/declarations';
import { catchError, createOnWarnFn, generatePreamble, join, loadRollupDiagnostics } from '@utils';
import MagicString from 'magic-string';

import type { BundleInputOptions, Bundler } from '../../bundle/bundle-interface';
import { createBundler } from '../../bundle/bundler-helper';
import {
  STENCIL_APP_DATA_ID,
  STENCIL_HYDRATE_FACTORY_ID,
  STENCIL_INTERNAL_HYDRATE_ID,
  STENCIL_MOCK_DOC_ID,
} from '../../bundle/entry-alias-ids';
import { bundleHydrateFactory } from './bundle-hydrate-factory';
import {
  HYDRATE_FACTORY_INTRO,
  HYDRATE_FACTORY_OUTRO,
  MODE_RESOLUTION_CHAIN_DECLARATION,
} from './hydrate-factory-closure';
import { updateToHydrateComponents } from './update-to-hydrate-components';
import { writeHydrateOutputs } from './write-hydrate-outputs';

const buildHydrateAppFor = async (
  format: 'esm' | 'cjs',
  bundler: Bundler,
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  outputTargets: d.OutputTargetHydrate[],
) => {
  const file = format === 'esm' ? 'index.mjs' : 'index.js';
  const bundlerOutput = await bundler.generate({
    banner: generatePreamble(config),
    format,
    file,
  });

  await writeHydrateOutputs(config, compilerCtx, buildCtx, outputTargets, bundlerOutput);
};

/**
 * Generate and build the hydrate app and then write it to disk
 *
 * @param config a validated Stencil configuration
 * @param compilerCtx the current compiler context
 * @param buildCtx the current build context
 * @param outputTargets the output targets for the current build
 */
export const generateHydrateApp = async (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  outputTargets: d.OutputTargetHydrate[],
) => {
  try {
    const packageDir = join(config.sys.getCompilerExecutingPath(), '..', '..');
    const input = join(packageDir, 'internal', 'hydrate', 'runner.js');
    const mockDoc = join(packageDir, 'mock-doc', 'index.js');
    const appData = join(packageDir, 'internal', 'app-data', 'index.js');

    const bundlerOptions: BundleInputOptions = {
      ...config.rollupConfig.inputOptions,
      external: ['stream'],

      input,
      inlineDynamicImports: true,
      plugins: [
        {
          name: 'hydrateAppPlugin',
          resolveId(id) {
            if (id === STENCIL_HYDRATE_FACTORY_ID) {
              return id;
            }
            if (id === STENCIL_MOCK_DOC_ID) {
              return mockDoc;
            }
            if (id === STENCIL_APP_DATA_ID) {
              return appData;
            }
            return null;
          },
          load(id) {
            if (id === STENCIL_HYDRATE_FACTORY_ID) {
              return generateHydrateFactory(config, compilerCtx, buildCtx);
            }
            return null;
          },
          transform(code) {
            /**
             * Remove the modeResolutionChain variable from the generated code.
             * This variable is redefined in `HYDRATE_FACTORY_INTRO` to ensure we can
             * use it within the hydrate and global runtime.
             */
            return code.replace(`var ${MODE_RESOLUTION_CHAIN_DECLARATION}`, '');
          },
        },
      ],
      treeshake: false,
      onwarn: createOnWarnFn(buildCtx.diagnostics),
    };

    const bundler = await createBundler(config, bundlerOptions);
    await Promise.all([
      buildHydrateAppFor('cjs', bundler, config, compilerCtx, buildCtx, outputTargets),
      buildHydrateAppFor('esm', bundler, config, compilerCtx, buildCtx, outputTargets),
    ]);
  } catch (e: any) {
    if (!buildCtx.hasError) {
      // TODO(STENCIL-353): Implement a type guard that balances using our own copy of Rollup types (which are
      // breakable) and type safety (so that the error variable may be something other than `any`)
      loadRollupDiagnostics(config, compilerCtx, buildCtx, e);
    }
  }
};

const generateHydrateFactory = async (config: d.ValidatedConfig, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx) => {
  if (!buildCtx.hasError) {
    try {
      const appFactoryEntryCode = await generateHydrateFactoryEntry(buildCtx);

      const bundler = await bundleHydrateFactory(config, compilerCtx, buildCtx, appFactoryEntryCode);
      if (bundler != null) {
        const bundlerOutput = await bundler.generate({
          format: 'cjs',
          esModule: false,
          strict: false,
          intro: HYDRATE_FACTORY_INTRO,
          outro: HYDRATE_FACTORY_OUTRO,
          preferConst: false,
          inlineDynamicImports: true,
        });

        if (!buildCtx.hasError && bundlerOutput != null && Array.isArray(bundlerOutput.output)) {
          return bundlerOutput.output[0].code;
        }
      }
    } catch (e: any) {
      catchError(buildCtx.diagnostics, e);
    }
  }
  return '';
};

const generateHydrateFactoryEntry = async (buildCtx: d.BuildCtx) => {
  const cmps = buildCtx.components;
  const hydrateCmps = await updateToHydrateComponents(cmps);
  const s = new MagicString('');

  s.append(`import { hydrateApp, registerComponents, styles } from '${STENCIL_INTERNAL_HYDRATE_ID}';\n`);

  hydrateCmps.forEach((cmpData) => s.append(cmpData.importLine + '\n'));

  s.append(`registerComponents([\n`);
  hydrateCmps.forEach((cmpData) => {
    s.append(`  ${cmpData.uniqueComponentClassName},\n`);
  });
  s.append(`]);\n`);
  s.append(`export { hydrateApp }\n`);

  return s.toString();
};
