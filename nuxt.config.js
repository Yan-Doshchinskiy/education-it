// @ts-nocheck

import localeRu from './locales/ru.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default {
  ssr: true,
  head: {
    title: 'Education',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' },
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  styleResources: {
    scss: ['./assets/scss/resourses.scss'],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    'nuxt-healthcheck',
  ],
  plugins: [
    { src: '@plugins/vee-validate.ts' },
    { src: '@plugins/axios.js' },
    { src: '@plugins/injectComponents.js' },
  ],
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    extend(config) {
      config.node = {
        fs: 'empty',
      };
    },
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        ru: localeRu,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
  healthcheck: {
    path: '/healthcheck',
    contentType: 'application/json',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    healthy: () => JSON.stringify({ status: 'UP' }),
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
};
