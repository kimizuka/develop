export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'develop.kimizuka.org',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'develop.kimizuka.org' },
      { hid: 'keywords', name: 'keywords', content: 'develop,kimizuka,org' },
      { hid: 'og:title', property: 'og:title', content: 'develop.kimizuka.org' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://develop.kimizuka.org' },
      { hid: 'og:image', property: 'og:image', content: 'https://kimizuka.fm/img/common/ogp.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'develop.kimizuka.org' },
      { hid: 'og:description', property: 'og:description', content: 'develop.kimizuka.org' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@ki_230' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@ki_230' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'develop.kimizuka.org' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'develop.kimizuka.org' },
      { hid: 'twitter:image:src', property: 'twitter:image:src', content: 'https://kimizuka.fm/img/common/ogp.png' },
      { hid: 'format-detection', property: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kosugi&family=Roboto&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/reset.scss',
    '~/assets/css/common.scss'
  ],

  styleResources: {
   scss: [
      '~/assets/css/variable.scss',
      '~/assets/css/extend.scss',
      '~/assets/css/mixin.scss',
      '~/assets/css/keyframe.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
