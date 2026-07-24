export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    '@nuxt/icon'
  ],

  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      }
    }
  },

  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'node',
        allowJs: true
      }
    }
  },


});