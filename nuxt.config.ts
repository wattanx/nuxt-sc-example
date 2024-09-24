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
    '/examples/client-components': {
      prerender: true,
    },
    '/nuxt-content': {
      prerender: true,
    },
    '/nuxt-content-sc': {
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
        {
          name: 'og:title',
          content: 'Nuxt Server Components Example',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://nuxt-sc-example.pages.dev/',
        },
        {
          name: 'og:description',
          content: 'This is an example collection of Nuxt Server Components',
        },
        {
          name: 'og:site_name',
          content: 'Nuxt Server Components Example',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: '@pontaxx',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/global.css'],

  experimental: {
    componentIslands: {
      selectiveClient: true,
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
  content: {
    highlight: {
      theme: 'github-dark',
      langs: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'shell',
        'mdc',
        'md',
        'yaml',
      ],
    },
  },
});
