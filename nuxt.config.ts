export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', as: 'style', href: 'https://fonts.googleapis.com' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.jusmundi.com/_fs/img/favicon.ico' }
      ]
    }
  },
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/dls.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-swiper',
    '@nuxt/test-utils/module'
  ],
  components: [
    { path: '~/components/dls', prefix: 'v' },
    '~/components'
  ],
  swiper: {
    styleLang: 'css',
    modules: ['autoplay']
  }
})
