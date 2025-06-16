// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-12',
  devtools: { enabled: true },

  modules: ['demo-translation'],
  demoTranslation: {
    defaultLocale: 'zhCN',
    locales: [
      { name: 'en', file: 'locales/en.json' },
      { name: 'zhCN', file: 'locales/zhCN.json' },
    ]
  },

  ui: {
    fonts: false,
  },
    
  future: {
    compatibilityVersion: 4
  },
})