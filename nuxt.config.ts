// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      link: [
        // Standard favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // PNG favicon example
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // For Apple Touch Icon (optional)
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
})