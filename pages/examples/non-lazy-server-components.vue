<script setup lang="ts">
definePageMeta({
  layout: 'without-code',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count++">
      increment
    </button>
    <HeavyComp class="mt-6" />
  </Boundary>
</template>
