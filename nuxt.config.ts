// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': resolve(__dirname, '/') },
  css: ["~/assets/scss/index.scss"],
  modules: ['@vueuse/nuxt', 'vue3-carousel-nuxt', '@nuxt/content', '@nuxtjs/seo', '@vee-validate/nuxt'],
  // SEO default global config
  site: {
    url: 'https://tsd.digital/',
    name: 'TSD',
    description: 'This is The Site Doctor - TSD website, IT company that is creating websites, web apps, e-commerce solutions, CMS Umbraco systems, web integrations and many more', // Max 160 chars
    defaultLocale: 'en',
  },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:18'
        }
      }
    }
  }
})