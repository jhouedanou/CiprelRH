<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div id="capture-zone" class="bg-white rounded-2xl shadow-xl p-8">
                <div v-if="results" class="space-y-8">
                    <div class="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <h3 class="text-xl font-semibold text-orange-900 mb-3">Département recommandé</h3>
                        <p class="text-2xl text-orange-600 font-bold">{{ results.departement }}</p>
                    </div>

                    <div class="space-y-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6">Vos scores par compétence</h3>

                        <div class="grid gap-6">
                            <!-- Force Collective -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Force Collective</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.forceCollective
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.forceCollective / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Équité -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Équité</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.equite
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.equite / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Engagement -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Engagement</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.engagement
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.engagement / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Respect -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Respect</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.respect
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.respect / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Innovation -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Innovation</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.innovation
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.innovation / 10) * 100}%` }"></div>
                                </div>
                            </div>

                            <!-- Convivialité -->
                            <div
                                class="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-lg font-medium text-gray-700">Convivialité</span>
                                    <span class="text-lg font-bold text-orange-600">{{ results.scores.convivialite
                                        }}/10</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-orange-500 h-2.5 rounded-full"
                                        :style="{ width: `${(results.scores.convivialite / 10) * 100}%` }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 text-center">
                    <!-- <NuxtLink to="/"
                        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                        Retour à l'accueil
                    </NuxtLink> -->
                    <!-- <button @click="downloadResults"
                        class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                        Télécharger CSV
                    </button> -->
                    <button @click="shareScreenshot"
                        class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4">
                        Partager mon évaluation
                    </button>
                    <button @click="captureScreen"
                        class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4">
                        Télécharger mon évaluation
                    </button>

                    <button @click="retournerAccueil"
                        class="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors m-4">
                        cliquez ici pour retourner à l'accueil
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useQuestionnaireStore } from '~/stores/questionnaire'
import html2canvas from 'html2canvas'

const store = useQuestionnaireStore()
const results = computed(() => store.calculateResults())
const maxScore = 10
const retournerAccueil = () => {
    navigateTo('/')
    store.resetQuestionnaire()
    store.resetResults()
}
const captureScreen = async () => {
    const element = document.getElementById('capture-zone')
    if (element) {
        const canvas = await html2canvas(element, {
            useCORS: true,
            scale: 2,
            backgroundColor: '#ffffff'
        })
        const link = document.createElement('a')
        link.download = 'resultats-ciprelrh.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
    }
}

const shareScreenshot = async () => {
    const element = document.getElementById('capture-zone')
    if (element) {
        const canvas = await html2canvas(element, {
            useCORS: true,
            scale: 2,
            backgroundColor: '#ffffff'
        })

        canvas.toBlob(async (blob) => {
            const file = new File([blob], 'resultats-ciprelrh.png', { type: 'image/png' })
            const shareData = {
                files: [file],
                title: 'Résultats CiprelRH',
                text: 'Mes résultats du questionnaire CiprelRH'
            }

            if (navigator.share && navigator.canShare(shareData)) {
                try {
                    await navigator.share(shareData)
                } catch (err) {
                    console.log('Erreur de partage:', err)
                }
            }
        }, 'image/png')
    }
}
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

const downloadResults = () => {
    const link = document.createElement('a')
    link.href = '/data/results.csv'
    link.download = 'resultats_ciprelrh.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
</script>
