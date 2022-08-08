// @ts-nocheck

import localeRu from './locales/ru.json';

export default {
  ssr: true,
  target: 'server',
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
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt',
  ],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n',
  ],
  plugins: [
    { src: '@plugins/injectComponents.js' },
  ],
  build: {
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
  router: {
    // eslint-disable-next-line
    scrollBehavior(to) {
      if (to.hash) {
        const el = document.querySelector(to.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
      }
    },
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
  generate: {
    fallback: true,
  },
};
