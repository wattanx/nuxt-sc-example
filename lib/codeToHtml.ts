import { createHighlighterCore, loadWasm } from 'shiki/core';

export async function codeToHtml(code: string, lang: 'javascript' | 'vue') {
  await loadWasm(import('shiki/wasm'));

  const highlighter = await createHighlighterCore({
    themes: [import('shiki/themes/vitesse-dark.mjs')],
    langs: [import('shiki/langs/javascript.mjs'), import('shiki/langs/vue.mjs')],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'vitesse-dark',
  });
}
