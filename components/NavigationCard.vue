<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  href: string;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="href" class="hover:bg-gray-800 space-y-4 border-none rounded-lg px-3 py-2 -mx-3">
    <div class="space-y-1">
      <p class="">{{ title }}</p>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </NuxtLink>
</template>
