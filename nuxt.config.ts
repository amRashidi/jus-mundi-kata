export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' }
      ]
    }
  },
  css: [
    '@/assets/styles/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-swiper'
  ]
})
