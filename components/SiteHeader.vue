<script setup lang="ts">
import GitHub from '~/components/icons/GitHub.vue';
</script>

<template>
  <header class="bg-gray-900 sticky py-4 px-0 top-0 z-[99] text-white">
    <div class="my-0 mx-auto py-0 px-6">
      <div class="flex flex-row items-center font-bold justify-between">
        <div>
          <NuxtLink class="items-center no-underline color" href="/">Nuxt Server Components Example</NuxtLink>
        </div>
        <a href="https://github.com/wattanx/nuxt-sc-example/" target="_blank">
          <GitHub />
        </a>
      </div>
    </div>
  </header>
</template>
