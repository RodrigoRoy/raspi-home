// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/i18n', 'dayjs-nuxt'],
  compatibilityDate: "2024-10-14",
  dayjs: {
    locales: ['es', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
  },
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