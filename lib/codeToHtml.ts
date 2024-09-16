import { createHighlighterCore, createWasmOnigEngine } from 'shiki/core';

export async function codeToHtml(code: string, lang: 'javascript' | 'vue') {
  const highlighter = await createHighlighterCore({
    themes: [import('shiki/themes/vitesse-dark.mjs')],
    langs: [import('shiki/langs/javascript.mjs'), import('shiki/langs/vue.mjs')],
    loadWasm: import('shiki/wasm'),
    engine: createWasmOnigEngine(import('shiki/wasm')),
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'vitesse-dark',
  });
}
