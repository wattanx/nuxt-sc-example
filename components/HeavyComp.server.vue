<script setup lang="ts">
const heavyTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 3000);
  });
};

await heavyTask();
</script>

<template>
  <div
    class="relative rounded-md border border-dashed border-gray-400 bg-blue-900 p-6"
  >
    <div class="space-y-4">
      <p class="absolute -top-4 rounded-full bg-gray-600 px-4 py-2 text-sm">
        Server Component
      </p>
      <p>This component is heavy.</p>
    </div>

    <slot />
  </div>
</template>
