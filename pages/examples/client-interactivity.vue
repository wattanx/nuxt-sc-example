<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <Counter class="mt-6">
      <Boundary label="Client Component" class="mt-6">
        <p>This is interactive.</p>

        <p>Count: {{ count }}</p>
        <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count++">
          increment
        </button>
      </Boundary>
    </Counter>
  </Boundary>
</template>
