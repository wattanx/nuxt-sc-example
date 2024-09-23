<script setup lang="ts">
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('typescript', typescript);

type Props = {
  count: number;
};

const props = defineProps<Props>();

const html = computed(() => {
  const code = `const a = ${props.count}`;
  return hljs.highlightAuto(code).value;
});
</script>

<template>
  <div
    class="relative mt-6 rounded-md border border-dashed border-gray-400 bg-blue-900 p-6"
  >
    <div class="space-y-4">
      <p class="absolute -top-4 rounded-full bg-gray-600 px-4 py-2 text-sm">
        Server Component
      </p>
      <p>This component is not included in the bundle</p>
      <p>If count is changed, code is changed.</p>
      <div class="bg-gray-900" v-html="html" />
    </div>

    <slot />
  </div>
</template>
