<script setup lang="ts">
import { createHighlighterCore, createWasmOnigEngine } from 'shiki/core';

const highlighter = await createHighlighterCore({
  themes: [import('shiki/themes/vitesse-dark.mjs')],
  langs: [import('shiki/langs/javascript.mjs')],
  engine: createWasmOnigEngine(import('shiki/wasm')),
});

type Props = {
  count: number;
};

const props = defineProps<Props>();

const code = `const a = ${props.count}`;
const html = highlighter.codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark',
});
</script>

<template>
  <div class="p-6 bg-blue-900 rounded-md relative border-dashed border-gray-400 border">
    <div class="space-y-4">
      <p class="absolute -top-4 bg-gray-600 px-4 py-2 rounded-full text-sm">Server Component</p>
      <p>This component is not included in the bundle</p>
      <p>If count is changed, code is changed.</p>
      <div v-html="html" />
    </div>
  </div>
</template>
