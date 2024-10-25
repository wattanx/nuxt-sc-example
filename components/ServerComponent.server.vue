<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <Boundary label="Server Component" :isClient="false">
    <Counter>
      <p>This is not interactive.</p>
    </Counter>

    <slot />
  </Boundary>
</template>
