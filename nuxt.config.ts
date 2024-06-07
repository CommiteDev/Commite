// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Commite',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'Commite.dev' },
        { name: 'language', content: 'English' },
        { hid: 'robots', name: 'robots', content: 'index, follow'},
        { name: 'application-name', content: 'Commite' },
        { name: 'description', content: 'Community for developers and job seekers' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    'nuxt-icon',
    'nuxt-gtag',
    '@nuxtjs/web-vitals',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
  ],
  gtag: {
    id: process.env.NUXT_PUBLIC_GA_ID,
    loadingStrategy: "async"
  },
  webVitals: {
    ga: {
      id: `${process.env.NUXT_PUBLIC_GA_ID}`,
    },
  }
})