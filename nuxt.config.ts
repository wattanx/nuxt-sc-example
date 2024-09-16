// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/examples/standalone-server-components': {
      prerender: true,
    },
    '/examples/client-interactivity': {
      prerender: true,
    },
    '/examples/nuxt-island': {
      prerender: true,
    },
  },
  app: {
    head: {
      title: 'Nuxt Server Components Example',
      meta: [
        {
          name: 'description',
          content: 'This is an example collection of Nuxt Server Components',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/global.css'],

  experimental: {
    componentIslands: {
      selectiveClient: 'deep',
    },
  },

  typescript: {
    shim: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-18',
  nitro: {
    experimental: {
      wasm: true,
    },
  },
});
