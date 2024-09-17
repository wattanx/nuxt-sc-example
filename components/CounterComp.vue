<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="rounded-md bg-red-300 p-4">
    <p>count: {{ count }}</p>

    <div class="flex gap-2">
      <button
        class="rounded-md bg-gray-700 px-2 py-1 text-white"
        @click="count++"
      >
        Increment
      </button>
      <button
        class="rounded-md bg-gray-700 px-2 py-1 text-white"
        @click="count--"
      >
        Decrement
      </button>
    </div>
  </div>
</template>
