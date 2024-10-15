// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ "@nuxt/ui", '@nuxtjs/i18n'],
  compatibilityDate: "2024-10-14",
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' },
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: false,
    }
  }
})