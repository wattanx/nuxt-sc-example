<script setup lang="ts">
import { createHighlighterCore, createWasmOnigEngine } from 'shiki/core';

const highlighter = await createHighlighterCore({
  themes: [import('shiki/themes/vitesse-dark.mjs')],
  langs: [import('shiki/langs/javascript.mjs')],
  engine: createWasmOnigEngine(import('shiki/wasm')),
});

const code = 'const a = 1';
const html = highlighter.codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark',
});
</script>

<template>
  <div class="p-4 bg-blue-400 rounded-md">
    <p>Server Component (CodeExample.server.vue)</p>
    <div v-html="html" />

    <p>not working client component</p>
    <CounterComp />
  </div>
</template>
