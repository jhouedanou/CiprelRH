<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Résultats de votre évaluation</h2>

                <div v-if="results" class="space-y-8">
                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h3 class="text-xl font-semibold text-blue-900 mb-3">Département recommandé</h3>
                        <p class="text-2xl text-blue-600 font-bold">{{ results.departement }}</p>
                    </div>

                    <div class="space-y-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6">Vos scores par compétence</h3>

                        <div class="grid gap-6">
                            <!-- Force Collective -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Force Collective</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.forceCollective
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.forceCollective / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Équité -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Équité</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.equite }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.equite / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Engagement -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Engagement</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.engagement
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.engagement / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Respect -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Respect</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.respect }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.respect / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Innovation -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Innovation</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.innovation
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.innovation / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Convivialité -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Convivialité</span>
                                    <span class="text-lg font-bold text-blue-600">{{ results.scores.convivialite
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.convivialite / 10) * 100}%` }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-10 text-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Retour à l'accueil
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useQuestionnaireStore } from '~/stores/questionnaire'

const store = useQuestionnaireStore()
const results = computed(() => store.calculateResults())
const maxScore = 10 // Ajustez selon votre échelle

const formatSkill = (skill) => {
    return skill.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
};

// Sauvegarder les résultats dès l'affichage
onMounted(async () => {
    try {
        await store.saveResults()
    } catch (error) {
        console.error('Erreur de sauvegarde:', error)
    }
})
</script>
