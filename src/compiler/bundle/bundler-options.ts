import rollupCommonjsPlugin from '@rollup/plugin-commonjs';
import rollupJsonPlugin from '@rollup/plugin-json';
import rollupNodeResolvePlugin from '@rollup/plugin-node-resolve';
import rollupReplacePlugin from '@rollup/plugin-replace';
import { createOnWarnFn, isString } from '@utils';
import { PluginContext, TreeshakingOptions } from 'rollup';

import type * as d from '../../declarations';
import { lazyComponentPlugin } from '../output-targets/dist-lazy/lazy-component-plugin';
import { createCustomResolverAsync } from '../sys/resolve/resolve-module-async';
import { appDataPlugin } from './app-data-plugin';
import type { BundleInputOptions, BundleOptions } from './bundle-interface';
import { coreResolvePlugin } from './core-resolve-plugin';
import { devNodeModuleResolveId } from './dev-node-module-resolve';
import { extFormatPlugin } from './ext-format-plugin';
import { extTransformsPlugin } from './ext-transforms-plugin';
import { fileLoadPlugin } from './file-load-plugin';
import { loaderPlugin } from './loader-plugin';
import { pluginHelper } from './plugin-helper';
import { serverPlugin } from './server-plugin';
import { resolveIdWithTypeScript, typescriptPlugin } from './typescript-plugin';
import { userIndexPlugin } from './user-index-plugin';
import { workerPlugin } from './worker-plugin';

/**
 * Build the rollup options that will be used to transpile, minify, and otherwise transform a Stencil project
 * @param config the Stencil configuration for the project
 * @param compilerCtx the current compiler context
 * @param buildCtx a context object containing information about the current build
 * @param bundleOpts Rollup bundling options to apply to the base configuration setup by this function
 * @returns the rollup options to be used
 */
const getRollupOptions = (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  bundleOpts: BundleOptions,
): BundleInputOptions => {
  const customResolveOptions = createCustomResolverAsync(config.sys, compilerCtx.fs, [
    '.tsx',
    '.ts',
    '.js',
    '.mjs',
    '.json',
    '.d.ts',
  ]);
  const nodeResolvePlugin = rollupNodeResolvePlugin({
    mainFields: ['collection:main', 'jsnext:main', 'es2017', 'es2015', 'module', 'main'],
    customResolveOptions,
    browser: true,
    rootDir: config.rootDir,
    ...(config.nodeResolve as any),
  });

  const orgNodeResolveId = nodeResolvePlugin.resolveId;
  const orgNodeResolveId2 = (nodeResolvePlugin.resolveId = async function (importee: string, importer: string) {
    const [realImportee, query] = importee.split('?');
    const resolved = await orgNodeResolveId.call(
      nodeResolvePlugin as unknown as PluginContext,
      realImportee,
      importer,
      {},
    );
    if (resolved) {
      if (isString(resolved)) {
        return query ? resolved + '?' + query : resolved;
      }
      return {
        ...resolved,
        id: query ? resolved.id + '?' + query : resolved.id,
      };
    }
    return resolved;
  });
  if (config.devServer?.experimentalDevModules) {
    nodeResolvePlugin.resolveId = async function (importee: string, importer: string) {
      const resolvedId = await orgNodeResolveId2.call(
        nodeResolvePlugin as unknown as PluginContext,
        importee,
        importer,
      );
      return devNodeModuleResolveId(config, compilerCtx.fs, resolvedId, importee);
    };
  }

  const beforePlugins = config.rollupPlugins.before || [];
  const afterPlugins = config.rollupPlugins.after || [];
  const rollupOptions: BundleInputOptions = {
    input: bundleOpts.inputs,
    output: {
      inlineDynamicImports: bundleOpts.inlineDynamicImports ?? false,
    },

    plugins: [
      coreResolvePlugin(config, compilerCtx, bundleOpts.platform, !!bundleOpts.externalRuntime),
      appDataPlugin(config, compilerCtx, buildCtx, bundleOpts.conditionals, bundleOpts.platform),
      lazyComponentPlugin(buildCtx),
      loaderPlugin(bundleOpts.loader),
      userIndexPlugin(config, compilerCtx),
      typescriptPlugin(compilerCtx, bundleOpts, config),
      extFormatPlugin(config),
      extTransformsPlugin(config, compilerCtx, buildCtx),
      workerPlugin(config, compilerCtx, buildCtx, bundleOpts.platform, !!bundleOpts.inlineWorkers),
      serverPlugin(config, bundleOpts.platform),
      ...beforePlugins,
      nodeResolvePlugin,
      resolveIdWithTypeScript(config, compilerCtx),
      rollupCommonjsPlugin({
        include: /node_modules/,
        sourceMap: config.sourceMap,
        transformMixedEsModules: false,
        ...config.commonjs,
      }),
      ...afterPlugins,
      pluginHelper(config, buildCtx, bundleOpts.platform),
      rollupJsonPlugin({
        preferConst: true,
      }),
      rollupReplacePlugin({
        'process.env.NODE_ENV': config.devMode ? '"development"' : '"production"',
        preventAssignment: true,
      }),
      fileLoadPlugin(compilerCtx.fs),
    ],

    treeshake: getTreeshakeOption(config, bundleOpts),
    preserveEntrySignatures: bundleOpts.preserveEntrySignatures ?? 'strict',

    onwarn: createOnWarnFn(buildCtx.diagnostics),

    cache: compilerCtx.rollupCache.get(bundleOpts.id),

    external: config.rollupConfig.inputOptions.external,
  };

  return rollupOptions;
};

/**
 * Build the rolldown options that will be used to transpile, minify, and otherwise transform a Stencil project
 * @param config the Stencil configuration for the project
 * @param compilerCtx the current compiler context
 * @param buildCtx a context object containing information about the current build
 * @param bundleOpts Rollup bundling options to apply to the base configuration setup by this function
 * @returns the rolldown options to be used
 */
const getRolldownOptions = (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  bundleOpts: BundleOptions,
): BundleInputOptions => {
  const beforePlugins = config.rollupPlugins.before || [];
  const afterPlugins = config.rollupPlugins.after || [];

  const rollupOptions: BundleInputOptions = {
    input: bundleOpts.inputs,
    output: {
      inlineDynamicImports: bundleOpts.inlineDynamicImports ?? false,
    },
    plugins: [
      coreResolvePlugin(config, compilerCtx, bundleOpts.platform, !!bundleOpts.externalRuntime),
      appDataPlugin(config, compilerCtx, buildCtx, bundleOpts.conditionals, bundleOpts.platform),
      lazyComponentPlugin(buildCtx),
      loaderPlugin(bundleOpts.loader),
      userIndexPlugin(config, compilerCtx),
      typescriptPlugin(compilerCtx, bundleOpts, config),
      extFormatPlugin(config),
      extTransformsPlugin(config, compilerCtx, buildCtx),
      workerPlugin(config, compilerCtx, buildCtx, bundleOpts.platform, !!bundleOpts.inlineWorkers),
      serverPlugin(config, bundleOpts.platform),
      ...beforePlugins,
      resolveIdWithTypeScript(config, compilerCtx),
      ...afterPlugins,
      pluginHelper(config, buildCtx, bundleOpts.platform),
      // TODO: use replacePlugin from rolldown/experimental
      rollupReplacePlugin({
        'process.env.NODE_ENV': config.devMode ? '"development"' : '"production"',
        preventAssignment: true,
      }),
      fileLoadPlugin(compilerCtx.fs),
    ],

    onwarn: createOnWarnFn(buildCtx.diagnostics),

    external: config.rollupConfig.inputOptions.external,
  };

  return rollupOptions;
};

const getTreeshakeOption = (config: d.ValidatedConfig, bundleOpts: BundleOptions): TreeshakingOptions | boolean => {
  if (bundleOpts.platform === 'hydrate') {
    return {
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    };
  }

  const treeshake =
    !config.devMode && config.rollupConfig.inputOptions.treeshake !== false
      ? {
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
        }
      : false;
  return treeshake;
};

export const createBundlerConfig = (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  bundleOpts: BundleOptions,
) => {
  if (config.experimentalRolldown) {
    return getRolldownOptions(config, compilerCtx, buildCtx, bundleOpts);
  }
  return getRollupOptions(config, compilerCtx, buildCtx, bundleOpts);
};
