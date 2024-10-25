<template>
  <Boundary label="Server Component" :isClient="false">
    <p>This is interactive.</p>

    <Counter nuxt-client>
      <!-- For some reason, the slot is not working -->
    </Counter>
  </Boundary>
</template>
