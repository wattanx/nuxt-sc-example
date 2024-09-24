<script setup lang="ts">
type Props = {
  path: string;
};

const props = defineProps<Props>();

const value = await queryContent(props.path!).findOne();
</script>

<template>
  <div>
    <ContentRendererMarkdown :value="value" />
  </div>
</template>
