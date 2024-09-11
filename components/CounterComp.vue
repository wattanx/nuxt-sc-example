<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="bg-red-300 p-4 rounded-md">
    <p>count: {{ count }}</p>

    <div class="flex gap-2">
      <button class="bg-gray-700 text-white px-2 py-1 rounded-md" @click="count++">Increment</button>
      <button class="bg-gray-700 text-white px-2 py-1 rounded-md" @click="count--">Decrement</button>
    </div>
  </div>
</template>
