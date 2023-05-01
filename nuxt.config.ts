export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://18.156.200.186:3000'
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon','@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
