<script setup lang="ts">
definePageMeta({
  layout: 'without-code',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <HeavyComp class="mt-6" />
  </Boundary>
</template>
