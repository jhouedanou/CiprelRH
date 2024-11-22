<template>
  <div id="main" class="min-h-screen bg-gray-100">

    <main id="amouff" class="p-0">
      <NuxtPage />
    </main>
  </div>
</template>
<script setup>
import { useHead } from '#app';
const config = useRuntimeConfig()

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
