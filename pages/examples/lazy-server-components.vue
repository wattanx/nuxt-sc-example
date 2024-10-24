<script setup lang="ts">
definePageMeta({
  layout: 'without-code',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <HeavyComp :lazy="true" class="mt-6">
      <template #fallback>
        <p>loading...</p>
      </template>
    </HeavyComp>
  </Boundary>
</template>
