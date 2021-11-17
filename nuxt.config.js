// @ts-nocheck

import localeRu from './locales/ru.json'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export default {
  ssr: false,
  head: {
    title: 'frontend-starter-kit-2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  styleResources: {
    scss: ['./assets/scss/resourses.scss']
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    'nuxt-healthcheck'
  ],
  plugins: [
    { src: '@plugins/vee-validate.ts' },
    { src: '@plugins/axios.js' },
    { src: '@plugins/injectComponents.js' }
  ],
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    extend (config) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        en: localeRu
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  },
  healthcheck: {
    path: '/healthcheck',
    contentType: 'application/json',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    healthy: () => {
      return JSON.stringify({ status: 'UP' })
    }
  },
  env: {
    baseUrl: process.env.BASE_URL
  }
}
