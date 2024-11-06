import { generatePreamble } from '@utils';

import type * as d from '../../../declarations';
import { generateBundlerOutput } from '../../app-core/bundle-app-core';
import type { OutputOptions } from '../../bundle/bundle-interface';
import type { Bundler } from '../../bundle/bundler-helper';
import { generateLazyModules } from './generate-lazy-module';

export const generateEsmBrowser = async (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  build: Bundler,
  outputTargets: d.OutputTargetDistLazy[],
): Promise<d.UpdatedLazyBuildCtx> => {
  const esmOutputs = outputTargets.filter((o) => !!o.esmDir && !!o.isBrowserBuild);
  if (esmOutputs.length) {
    const outputTargetType = esmOutputs[0].type;
    const esmOpts: OutputOptions = {
      banner: generatePreamble(config),
      format: 'es',
      entryFileNames: '[name].esm.js',
      chunkFileNames: config.hashFileNames ? 'p-[hash].js' : '[name]-[hash].js',
      assetFileNames: config.hashFileNames ? 'p-[hash][extname]' : '[name]-[hash][extname]',
      preferConst: true,
      sourcemap: config.sourceMap,
    };

    const output = await generateBundlerOutput(build, esmOpts, config, buildCtx.entryModules);

    if (output != null) {
      const es2017destinations = esmOutputs
        .map((o) => o.esmDir)
        .filter((esmDir): esmDir is string => typeof esmDir === 'string');
      buildCtx.esmBrowserComponentBundle = await generateLazyModules(
        config,
        compilerCtx,
        buildCtx,
        outputTargetType,
        es2017destinations,
        output,
        'es2017',
        true,
        '',
      );
    }
  }

  return { name: 'esm-browser', buildCtx };
};
