export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:false,
  modules: ['nuxt-vuefire'],
  vuefire: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    },
    auth: true,
    analytics: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/amblem.png' }
      ]
    }
  },
  plugins: [
    '~/plugins/firebase.client.js'
  ],
})