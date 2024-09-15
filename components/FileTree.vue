<script setup lang="ts">
import { createHighlighterCore, createWasmOnigEngine, loadWasm } from 'shiki/core';

export type FileTreeProps = {
  exampleName: string;
  filePaths: string[];
  codes: Record<string, string>;
};
type Tree = {
  [key: string]: Tree;
};
const props = defineProps<FileTreeProps>();

await loadWasm(import('shiki/wasm'));

const highlighter = await createHighlighterCore({
  themes: [import('shiki/themes/vitesse-dark.mjs')],
  langs: [import('shiki/langs/javascript.mjs'), import('shiki/langs/vue.mjs')],
  engine: createWasmOnigEngine(import('shiki/wasm')),
});

const getInitialCode = () => {
  const key = Object.keys(props.codes).find((key) => key.includes(props.exampleName)) || '';
  const code = highlighter.codeToHtml(props.codes[key] || '', {
    lang: 'vue',
    theme: 'vitesse-dark',
  });
  return code;
};

const selectedPath = ref(Object.keys(props.codes).find((key) => key.includes(props.exampleName)) || '');
const currentCode = ref(getInitialCode());

const tree: Tree = {};

for (const path of props.filePaths) {
  const pathParts = path.split('/');
  let currentPart = tree;

  for (const part of pathParts) {
    if (!currentPart[part]) {
      currentPart[part] = {};
    }

    // @ts-expect-error
    currentPart = currentPart[part];
  }
}

const handleSelectPath = (path: string) => {
  const code = highlighter.codeToHtml(props.codes[path] || '', {
    lang: 'vue',
    theme: 'vitesse-dark',
  });
  currentCode.value = code;
  selectedPath.value = path;
};
</script>

<template>
  <div class="flex mt-4 flex-col lg:flex-row border-gray-400 border rounded-md p-4">
    <div class="pr-6 pb-6">
      <RenderTree
        :selectedPath="selectedPath"
        @selectPath="handleSelectPath"
        :node="tree"
        :index="0"
        :exampleName="props.exampleName"
      />
    </div>
    <div class="overflow-auto px-4 py-4 lg:py-0 border-t lg:border-l lg:border-t-0 border-gray-400">
      <div v-html="currentCode"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(pre) {
  background-color: var(--gray-900) !important;
  overflow: auto;
}
</style>
