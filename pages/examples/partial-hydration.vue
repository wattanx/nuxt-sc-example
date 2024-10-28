<script setup lang="ts">
definePageMeta({
  layout: 'example',
});
</script>

<template>
  <Boundary label="Client Component">
    <PartialHydration class="mt-6">
      <Boundary label="Client Component" class="mt-6">
        <Counter>
          <p>This is interactive.</p>
        </Counter>
      </Boundary>
    </PartialHydration>
  </Boundary>
</template>
