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
      href="/examples/server-and-client-components"
      title="Server Components Slot"
      description="Client Components can be put in the Server Components slot."
    />
  </div>
</template>
