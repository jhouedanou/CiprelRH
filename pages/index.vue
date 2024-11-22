<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4">
        <div class="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <img src="/images/logo.webp" alt="CIPREL Logo" class="h-24 mx-auto mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">Questionnaire d'orientation - CIPREL</h1>
            <p class="text-lg text-gray-600 mb-8">Découvrez le département qui correspond le mieux à vos compétences</p>
            <NuxtLink to="/questionnaire"
                class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-colors">
                Commencer le questionnaire
            </NuxtLink>
        </div>
    </div>
</template>