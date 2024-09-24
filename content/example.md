# What is Nuxt Server Components ?

> Server components allow server-rendering individual components within your client-side apps. It's possible to use server components within Nuxt, even if you are generating a static site. That makes it possible to build complex sites that mix dynamic components, server-rendered HTML and even static chunks of markup. <br /> https://nuxt.com/docs/guide/directory-structure/components#server-components

## How to use Nuxt Server Components ?

```vue
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
    class="relative rounded-md border border-dashed border-gray-400 bg-blue-900 p-6"
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
```
