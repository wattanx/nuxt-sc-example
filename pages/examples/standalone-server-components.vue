<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <button class="px-2 py-1 mt-2 bg-gray-800 rounded-md" @click="count++">increment</button>
    <CodeExample :count class="mt-6" />
  </Boundary>
</template>
