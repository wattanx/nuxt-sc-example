<script setup lang="ts">
import NavigationCard from '~/components/NavigationCard.vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <NavigationCard
      href="/examples/standalone-server-components"
      title="Standalone server components"
      description="basic example"
    />

    <NavigationCard
      href="/examples/client-interactivity"
      title="Client interactivity within Server Components"
      description="Client Components can be put in the Server Components slot."
    />

    <NavigationCard
      href="/examples/nuxt-island"
      title="NuxtIsland"
      description="`NuxtIsland` is the base component of Server Components"
    />
  </div>
</template>
