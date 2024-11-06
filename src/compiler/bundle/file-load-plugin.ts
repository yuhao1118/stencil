import { normalizeFsPath } from '@utils';

import { InMemoryFileSystem } from '../sys/in-memory-fs';
import type { Plugin } from './bundle-interface';

export const fileLoadPlugin = (fs: InMemoryFileSystem): Plugin => {
  return {
    name: 'fileLoadPlugin',

    load(id) {
      const fsFilePath = normalizeFsPath(id);
      if (id.endsWith('.d.ts')) {
        return '';
      }
      return fs.readFile(fsFilePath);
    },
  };
};
