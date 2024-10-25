<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div
    class="relative rounded-md border border-dashed border-gray-400 bg-blue-900 p-6"
  >
    <div class="space-y-4">
      <p class="absolute -top-4 rounded-full bg-gray-600 px-4 py-2 text-sm">
        Server Component
      </p>
      <p>This is not interactive.</p>
      <p>Count: {{ count }}</p>

      <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count++">
        increment
      </button>
    </div>

    <slot />
  </div>
</template>
