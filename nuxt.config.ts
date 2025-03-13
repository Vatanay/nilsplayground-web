// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  // CSS dosyasını global olarak import etme
  css: ['~/assets/css/main.css'],
  
  // i18n konfigürasyonu
  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'tr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    langDir: '../locales',
    lazy: false,
    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ]
  },
  
  // Sayfa başlığı ve favicon ayarları
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/images/appicon.png' }
      ]
    }
  },
  
  // GitHub Pages için statik site oluşturma ayarları
  ssr: true,
  nitro: {
    preset: 'github-pages'
  }
})