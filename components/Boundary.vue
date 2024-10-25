<script setup lang="ts">
type Props = {
  label: string;
  isClient?: boolean;
};

withDefaults(defineProps<Props>(), {
  isClient: true,
});
</script>

<template>
  <div
    class="relative rounded-md border border-dashed border-gray-400 p-6"
    :class="{
      'bg-red-900': isClient,
      'bg-blue-900': !isClient,
    }"
  >
    <p class="absolute -top-4 rounded-full bg-gray-600 px-4 py-2 text-sm">
      {{ label }}
    </p>
    <slot />
  </div>
</template>
