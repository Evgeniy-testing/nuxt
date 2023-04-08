// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [400, 500, 600, 700, 800, 900],
          Poppins: true,
        },
      },
    ],
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },
}
