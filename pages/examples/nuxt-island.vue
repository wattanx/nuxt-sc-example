<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>
<template>
  <Boundary label="Client Component">
    <button class="px-2 py-1 mt-2 bg-gray-800 rounded-md" @click="count++">increment</button>
    <NuxtIsland name="IslandCodeExample" :props="{ count }">
      <Boundary label="Client Component" class="mt-6">
        <p>Client Components can be put in the Server Components slot.</p>
        <button class="px-2 py-1 mt-2 bg-gray-800 rounded-md" @click="count--">decrement</button>
      </Boundary>
    </NuxtIsland>
  </Boundary>
</template>
