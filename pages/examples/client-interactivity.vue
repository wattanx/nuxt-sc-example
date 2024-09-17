<script setup lang="ts">
definePageMeta({
  layout: 'example',
});

const count = ref(0);
</script>

<template>
  <Boundary label="Client Component">
    <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count++">
      increment
    </button>
    <CodeExample :count class="mt-6">
      <Boundary label="Client Component" class="mt-6">
        <p>Client Components can be put in the Server Components slot.</p>
        <button class="mt-2 rounded-md bg-gray-800 px-2 py-1" @click="count--">
          decrement
        </button>
      </Boundary>
    </CodeExample>
  </Boundary>
</template>
