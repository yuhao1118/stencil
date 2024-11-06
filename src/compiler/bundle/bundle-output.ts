import { loadRollupDiagnostics } from '@utils';

import type * as d from '../../declarations';
import type { BundleOptions } from './bundle-interface';
import { createBundler } from './bundler-helper';
import { createBundlerConfig } from './bundler-options';

export const bundleOutput = async (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  bundleOpts: BundleOptions,
) => {
  try {
    config.logger.debug(`Bundling with ${config.experimentalRolldown ? 'rolldown' : 'rollup'}`);

    const bundlerInputOptions = createBundlerConfig(config, compilerCtx, buildCtx, bundleOpts);
    const bundler = await createBundler(config, bundlerInputOptions);

    return bundler;
  } catch (e: any) {
    if (!buildCtx.hasError) {
      // TODO(STENCIL-353): Implement a type guard that balances using our own copy of Rollup types (which are
      // breakable) and type safety (so that the error variable may be something other than `any`)
      loadRollupDiagnostics(config, compilerCtx, buildCtx, e);
    }
  }
  return undefined;
};
