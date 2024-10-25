import type { Kind, Meta } from '~/types/data';
import { readFile, writeFile } from 'node:fs/promises';
import { join, parse, dirname } from 'node:path';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';

export const meta = {
  'standalone-server-components': {
    kind: 'standalone-server-components',
    path: 'standalone-server-components',
    title: 'Standalone Server Components',
    description:
      'Standalone server components will always be rendered on the server, also known as Islands components.\nWhen their props update, this will result in a network request that will update the rendered HTML in-place.',
  },
  'client-interactivity': {
    kind: 'client-interactivity',
    path: 'client-interactivity',
    title: 'Client Interactivity with Server Components',
    description: 'Client Components can be put in the Server Components slot.',
  },
  'nuxt-island': {
    kind: 'nuxt-island',
    path: 'nuxt-island',
    title: 'NuxtIsland',
    description: '`NuxtIsland` is the base component of Server Components',
  },
  'client-components': {
    kind: 'client-components',
    path: 'client-components',
    title: 'Client Components',
    description: 'This is an example for Client Components only',
  },
  'lazy-server-components': {
    kind: 'lazy-server-components',
    path: 'lazy-server-components',
    title: 'Lazy Server Components',
    description:
      'Lazy Server Components do not block navigation. Once rendered, they are cached',
  },
  'non-lazy-server-components': {
    kind: 'non-lazy-server-components',
    path: 'non-lazy-server-components',
    title: 'Non-Lazy Server Components',
    description:
      'Navigation is blocked until the Server Components are rendered. Once rendered, they are cached',
  },
  'selective-hydration': {
    kind: 'selective-hydration',
    path: 'selective-hydration',
    title: 'Selective Hydration',
    description: 'A part of the Server Component can be hydrated.',
  },
} satisfies Record<Kind, Meta>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function removeBasePath(fullPath: string, basePath: string) {
  const normarizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return fullPath.replace(normarizedBasePath, '');
}

async function main() {
  const base = join(__dirname, '../pages/examples');
  const paths = (await glob(join(base, '**/*.vue'))).sort();

  const serverComponentsPaths = (
    await glob(join(__dirname, '../components/**/*.server.vue'))
  ).sort();
  const islandComponentsPaths = (
    await glob(join(__dirname, '../components/islands/**/*.vue'))
  ).sort();

  const pathMap: Record<
    string,
    {
      kind: Kind;
      paths: string[];
    }
  > = {};

  for (const path of paths) {
    const { name } = parse(path);

    pathMap[name] = {
      kind: name as Kind,
      paths: [...serverComponentsPaths, ...islandComponentsPaths, path].map(
        (path) => removeBasePath(path, join(__dirname, '../')),
      ),
    };
  }

  const promises = Object.entries(pathMap).map(
    async ([key, { kind, paths }]) => {
      const codeMap: Record<string, string> = {};
      const code = await Promise.all(
        paths.map((path) => readFile(path, 'utf-8')),
      );

      for (const [index, path] of paths.entries()) {
        const name = path.replace(join(base, `(${kind})`, key, '/'), '');

        // @ts-expect-error
        codeMap[name] = code[index];
      }

      await writeFile(
        join('.', '_generated', `${key}.json`),
        JSON.stringify(
          {
            meta: {
              ...meta[kind],
            },
            codes: codeMap,
          },
          null,
          2,
        ),
      );
    },
  );

  await Promise.all(promises);
}

main();
