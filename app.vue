<template>
  <div id="main" class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow p-4">
      <div class="container mx-auto flex items-center justify-center">
        <nuxt-link to="/" class="text-orange-600 font-bold text-lg">
          <img src="/images/logo.webp" alt="Logo" class="h-12" />
        </nuxt-link>
      </div>
    </nav>
    <main class="p-0">
      <NuxtPage />
    </main>
  </div>
</template>
<script>
import { useHead } from '#app';

useHead({
  title: 'CiprelRH',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Questionnaire d\'orientation professionnelle CiprelRH' },
    { name: 'theme-color', content: '#ed7f04' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icons/ios/192.png' }
  ]
});
</script>
<style>
#main {
  background: url(images/02.webp) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale');
  -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')";
}
</style>
