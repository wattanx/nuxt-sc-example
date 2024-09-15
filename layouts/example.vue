<script setup lang="ts">
import type { Meta } from '~/types/data';
import FileTree from '~/components/FileTree.vue';

const route = useRoute();

const exampleName = route.path.split('/')[2] as string;

const data: { meta: Meta; codes: Record<string, string> } = await import(`../_generated/${exampleName}.json`);
</script>

<template>
  <div class="space-y-2">
    <h2 class="text-xl">Standalone server components</h2>

    <p class="text-gray-400">
      Standalone server components will always be rendered on the server, also known as Islands components.
    </p>
    <p class="text-gray-400">
      When their props update, this will result in a network request that will update the rendered HTML in-place.
    </p>
  </div>

  <div class="flex gap-4 mt-4 flex-col md:flex-row">
    <div class="space-y-8 md:w-96 md:min-w-96">
      <h3 class="text-xl">Preview</h3>
      <slot />
    </div>

    <div class="space-y-2 flex-1 overflow-auto">
      <h3 class="text-xl">Code</h3>
      <FileTree :codes="data.codes" :filePaths="Object.keys(data.codes)" :exampleName="exampleName" />
    </div>
  </div>
</template>
