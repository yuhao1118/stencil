import type * as d from '../../declarations';
import type { OutputOptions } from '../bundle/bundle-interface';
import type { Bundler } from '../bundle/bundler-helper';
import { STENCIL_CORE_ID } from '../bundle/entry-alias-ids';

/**
 * Generate rollup or rolldown output based on a rollup or rolldown build and a series of options.
 *
 * @param bundler a rollup or rolldown build
 * @param options output options for rollup or rolldown
 * @param config a user-supplied configuration object
 * @param entryModules a list of entry modules, for checking which chunks
 * contain components
 * @returns a Promise wrapping either build results or `null`
 */
export const generateBundlerOutput = async (
  bundler: Bundler,
  options: OutputOptions,
  config: d.ValidatedConfig,
  entryModules: d.EntryModule[],
): Promise<d.BundlerResult[] | null> => {
  if (bundler == null) {
    return null;
  }

  const { output } = await bundler.generate(options);
  return output.map((chunk: any) => {
    if (chunk.type === 'chunk') {
      const isCore = Object.keys(chunk.modules).some((m) => m.includes(STENCIL_CORE_ID));
      return {
        type: 'chunk',
        fileName: chunk.fileName,
        map: chunk.map,
        code: chunk.code,
        moduleFormat: options.format,
        entryKey: chunk.name,
        imports: chunk.imports,
        isEntry: !!chunk.isEntry,
        isComponent: !!chunk.isEntry && entryModules.some((m) => m.entryKey === chunk.name),
        isBrowserLoader: chunk.isEntry && chunk.name === config.fsNamespace,
        isIndex: chunk.isEntry && chunk.name === 'index',
        isCore,
      };
    } else {
      return {
        type: 'asset',
        fileName: chunk.fileName,
        content: chunk.source as any,
      };
    }
  });
};
