<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <ServerComponent class="mt-6">
      <Boundary label="Client Component" class="mt-6">
        <Counter>
          <p>This is interactive.</p>
        </Counter>
      </Boundary>
    </ServerComponent>
  </Boundary>
</template>
