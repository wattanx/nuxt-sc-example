<script setup lang="ts">
import GitHub from '~/components/icons/GitHub.vue';
</script>

<template>
  <header class="sticky top-0 z-[99] bg-gray-900 px-0 py-4 text-white">
    <div class="mx-auto my-0 px-6 py-0">
      <div class="flex flex-row items-center justify-between font-bold">
        <div>
          <NuxtLink class="color items-center no-underline" href="/"
            >Nuxt Server Components Example</NuxtLink
          >
        </div>
        <a href="https://github.com/wattanx/nuxt-sc-example/" target="_blank">
          <GitHub />
        </a>
      </div>
    </div>
  </header>
</template>
