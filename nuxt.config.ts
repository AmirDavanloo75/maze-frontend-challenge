export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image'],

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      },
      title: 'ماز | فروشگاه آنلاین',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'فروشگاه آنلاین ماز - تجربه خریدی متفاوت با محصولات باکیفیت'
        },
        { name: 'keywords', content: 'ماز, فروشگاه, آنلاین, frontend, vue, nuxt' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: false,
    shim: false,
  },

  // Performance & SEO
  nitro: {
    compressPublicAssets: true,
  },

  // Tailwind
  tailwindcss: {
    exposeConfig: true,
    configPath: 'tailwind.config.js'
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://fakestoreapi.com'
    }
  }
})