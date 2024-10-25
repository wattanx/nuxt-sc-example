<script setup lang="ts">
definePageMeta({
  layout: 'example',
});
</script>

<template>
  <Boundary label="Server Component" :isClient="false">
    <p>
      nuxt-client is not working, but I'm not sure if this is the intended
      behavior.
    </p>
    <Counter nuxt-client />
  </Boundary>
</template>
