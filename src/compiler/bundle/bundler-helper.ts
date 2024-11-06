import { type OutputOptions as RolldownOutputOptions, rolldown, type RolldownOptions } from 'rolldown';
import { rollup } from 'rollup';

import type { ValidatedConfig } from '../../declarations';
import type { BundleInputOptions, BundleOutput, Bundler } from './bundle-interface';

// TODO: rolldown is designed to be a drop-in replacement for rollup, but it's not quite there yet
// so we need to cast to unknown as a temporary fix. In the future we should remove this cast.
const createRolldownBundler = async (options: BundleInputOptions): Promise<Bundler> => {
  const bundler = await rolldown(options as unknown as RolldownOptions);
  return {
    generate: async (options) => {
      return bundler.generate(options as unknown as RolldownOutputOptions) as unknown as BundleOutput;
    },
  };
};

const createRollupBundler = async (options: BundleInputOptions): Promise<Bundler> => {
  const bundler = await rollup(options);

  return {
    generate: async (options) => {
      return bundler.generate(options);
    },
  };
};

export const createBundler = async (config: ValidatedConfig, options: BundleInputOptions) => {
  config.logger.debug(`Bundling with ${config.experimentalRolldown ? 'rolldown' : 'rollup'}`);
  if (config.experimentalRolldown) {
    return await createRolldownBundler(options);
  }
  return await createRollupBundler(options);
};
