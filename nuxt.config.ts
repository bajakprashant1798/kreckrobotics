// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],

  css: [
    '~/assets/global.css'    // <--- This line includes your CSS globally!
  ],

  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    redirect: false, // we’ll handle auth redirects ourselves
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        // Standard favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Google Fonts
         { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:900&display=swap' }
        // PNG favicon example
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // For Apple Touch Icon (optional)
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
    }
  },
})