<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count++">
      increment
    </button>
    <CodeExample :count class="mt-6" />
  </Boundary>
</template>
