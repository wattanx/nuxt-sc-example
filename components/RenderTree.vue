<script setup lang="ts">
import FolderIcon from './icons/FolderIcon.vue';

type Tree = {
  [key: string]: Tree;
};

type Props = {
  node: Tree;
  index: number;
  exampleName: string;
  selectedPath: string;
  path?: string;
};

const props = withDefaults(defineProps<Props>(), {
  path: '',
});

defineEmits<{
  selectPath: [string];
}>();

const nodes = Object.keys(props.node).map((key) => {
  const newPath = props.path ? `${props.path}/${key}` : `${key}`;
  // @ts-expect-error
  const hasChildren = Object.keys(props.node[key]).length > 0;
  const basePathWithName = `${props.exampleName}/`;
  const position = props.index === 0 ? 0 : 24;

  return {
    newPath,
    hasChildren,
    basePathWithName,
    position,
    key,
    child: props.node[key]!,
  };
});
</script>

<template>
  <ul>
    <template v-for="node in nodes" :key="node.key">
      <li
        :class="{
          'text-blue-300': selectedPath === node.newPath,
        }"
        :style="{ paddingLeft: `${node.position}px` }"
        v-if="!node.hasChildren"
      >
        <button @click="$emit('selectPath', node.newPath)">{{ node.key }}</button>
        <RenderTree
          :selectedPath="selectedPath"
          :node="node.child"
          :index="index + 1"
          :exampleName="exampleName"
          :path="node.newPath"
        />
      </li>

      <details class="select-none" v-else :style="{ paddingLeft: `${node.position}px` }" open>
        <summary class="flex gap-1 items-center list-none cursor-pointer text-gray-400 select-none">
          <FolderIcon />
          {{ node.key }}
        </summary>
        <RenderTree
          :selectedPath="selectedPath"
          class="ml-2 t-1 border-l border-l-gray-600"
          :node="node.child"
          :index="index + 1"
          :exampleName="exampleName"
          :path="node.newPath"
          @selectPath="$emit('selectPath', $event)"
        />
      </details>
    </template>
  </ul>
</template>
