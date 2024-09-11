<script setup lang="ts">
import NavigationCard from '~/components/NavigationCard.vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <NavigationCard href="/standalone-server-components" title="Standalone server components" description="" />
    <NuxtLink class="underline" to="/client-component">Client Component</NuxtLink>
    <NuxtLink class="underline" to="/server-component">Server Component</NuxtLink>
    <NuxtLink class="underline" to="/island-component">Island Component</NuxtLink>
  </div>
</template>
