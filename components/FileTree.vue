<script setup lang="ts">
import { codeToHtml } from '~/lib/codeToHtml';

export type FileTreeProps = {
  exampleName: string;
  filePaths: string[];
  codes: Record<string, string>;
};
type Tree = {
  [key: string]: Tree;
};
const props = defineProps<FileTreeProps>();

const key = Object.keys(props.codes).find((key) => key.includes(props.exampleName)) || '';
const result = await codeToHtml(props.codes[key] || '', 'vue');
const currentCode = ref(result);

const selectedPath = ref(Object.keys(props.codes).find((key) => key.includes(props.exampleName)) || '');

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

const handleSelectPath = async (path: string) => {
  const code = await codeToHtml(props.codes[path] || '', 'vue');
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
