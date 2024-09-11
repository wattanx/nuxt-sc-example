<script setup lang="ts">
const bgColor = typeof window !== 'undefined' ? 'bg-red-400' : 'bg-blue-400';
</script>

<template>
  <div class="p-4 rounded-md" :class="bgColor">
    <slot />
  </div>
</template>
