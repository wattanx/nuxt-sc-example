<script setup lang="ts">
import { codeToHtml } from 'shiki';

const code = 'const a = 1';
const html = await codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark',
});
</script>

<template>
  <div class="p-6 bg-blue-900 rounded-md relative border-dashed border-gray-400 border">
    <p class="absolute -top-4 bg-gray-600 px-4 py-2 rounded-full text-sm">Server Component</p>
    <div v-html="html" />
  </div>
</template>
