<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  href: string;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="href"
    class="-mx-3 space-y-4 rounded-lg border-none px-3 py-2 hover:bg-gray-800"
  >
    <div class="space-y-1">
      <p class="">{{ title }}</p>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </NuxtLink>
</template>
