export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  
  devtools: { enabled:false},
  css: [
    '@/assets/css/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vite-pwa/nuxt'],
 
  nitro: {
    preset: 'vercel',
    prerender: {
      failOnError: false
    }
  },
  ssr: false,
  image: {
    quality: 80,
    format: ['webp', 'jpg']
  },  
  pwa: {
    manifest: {
      name: 'CiprelRH',
      short_name: 'CiprelRH',
      description: 'Questionnaire d\'orientation professionnelle CiprelRH',
      theme_color: '#ed7f04',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        // Android Icons
        {
          src: '/icons/android/android-launchericon-48-48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/android/android-launchericon-72-72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/android/android-launchericon-96-96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/android/android-launchericon-144-144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/android/android-launchericon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/android/android-launchericon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },

        // iOS Icons
        {
          src: '/icons/ios/16.png',
          sizes: '16x16',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/20.png',
          sizes: '20x20',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/29.png',
          sizes: '29x29',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/32.png',
          sizes: '32x32',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/40.png',
          sizes: '40x40',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/50.png',
          sizes: '50x50',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/57.png',
          sizes: '57x57',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/58.png',
          sizes: '58x58',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/60.png',
          sizes: '60x60',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/64.png',
          sizes: '64x64',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/76.png',
          sizes: '76x76',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/80.png',
          sizes: '80x80',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/87.png',
          sizes: '87x87',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/100.png',
          sizes: '100x100',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/114.png',
          sizes: '114x114',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/120.png',
          sizes: '120x120',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/167.png',
          sizes: '167x167',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/180.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/ios/1024.png',
          sizes: '1024x1024',
          type: 'image/png',
          purpose: 'any'
        },

        // Windows Icons
        {
          src: '/icons/windows/SmallTile.scale-100.png',
          sizes: '71x71',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/SmallTile.scale-125.png',
          sizes: '89x89',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/SmallTile.scale-150.png',
          sizes: '107x107',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/SmallTile.scale-200.png',
          sizes: '142x142',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Square150x150Logo.scale-100.png',
          sizes: '150x150',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Square150x150Logo.scale-125.png',
          sizes: '188x188',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Square150x150Logo.scale-150.png',
          sizes: '225x225',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Square150x150Logo.scale-200.png',
          sizes: '300x300',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Wide310x150Logo.scale-100.png',
          sizes: '310x150',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Wide310x150Logo.scale-125.png',
          sizes: '388x188',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Wide310x150Logo.scale-150.png',
          sizes: '465x225',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icons/windows/Wide310x150Logo.scale-200.png',
          sizes: '620x300',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})
