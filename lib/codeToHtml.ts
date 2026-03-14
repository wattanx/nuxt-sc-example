import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

export async function codeToHtml(code: string, lang: 'javascript' | 'vue') {
  const highlighter = await createHighlighterCore({
    themes: [import('shiki/themes/vitesse-dark.mjs')],
    langs: [
      import('shiki/langs/javascript.mjs'),
      import('shiki/langs/vue.mjs'),
    ],
    engine: createJavaScriptRegexEngine(),
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'vitesse-dark',
  });
}
