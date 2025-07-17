export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/ui'],
  demoTranslation: {
    defaultLocale: 'zhCN',
    locales: [
      { name: 'en', file: 'locales/en.json' },
      { name: 'zhCN', file: 'locales/zhCN.json' },
    ]
  },

  ui: {
    fonts: false
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-06-12',
})
