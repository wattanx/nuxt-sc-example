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
    description: 'Basic example of standalone server components',
  },
  'client-interactivity': {
    kind: 'client-interactivity',
    path: 'client-interactivity',
    title: 'Client Interactivity with Server Components',
    description: 'Client Components can be put in the Server Components slot.',
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

  const serverComponentsPaths = (await glob(join(__dirname, '../components/**/*.server.vue'))).sort();

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
      paths: [...serverComponentsPaths, path].map((path) => removeBasePath(path, join(__dirname, '../'))),
    };
  }

  const promises = Object.entries(pathMap).map(async ([key, { kind, paths }]) => {
    const codeMap: Record<string, string> = {};
    const code = await Promise.all(paths.map((path) => readFile(path, 'utf-8')));

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
        2
      )
    );
  });

  await Promise.all(promises);
}

main();
