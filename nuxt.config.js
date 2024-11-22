export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  nitro: {
    preset: 'vercel',
    prerender: {
      failOnError: false
    },
  },  nitro: {
    preset: 'vercel',
    prerender: {
      failOnError: false
    },
  }
})
