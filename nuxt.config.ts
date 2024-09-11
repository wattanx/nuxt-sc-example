// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});
