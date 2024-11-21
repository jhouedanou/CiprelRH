<template>
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold mb-6">Résultats de votre évaluation</h2>

        <div v-if="results" class="space-y-6">
            <div class="bg-blue-50 p-4 rounded">
                <h3 class="text-lg font-semibold mb-2">Département recommandé :</h3>
                <p class="text-xl text-blue-600">{{ results.departement }}</p>
            </div>

            <div>
                <h3 class="text-lg font-semibold mb-2">Vos scores par compétence :</h3>
                <div class="grid gap-4">
                    <div v-for="(score, skill) in results.scores" :key="skill" class="flex items-center">
                        <span class="w-1/3 capitalize">{{ formatSkill(skill) }}</span>
                        <div class="w-2/3 bg-gray-200 rounded-full h-4">
                            <div class="bg-blue-500 h-4 rounded-full"
                                :style="{ width: `${(score / maxScore) * 100}%` }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <NuxtLink to="/" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Retour à l'accueil
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const store = useQuestionnaireStore()
const results = computed(() => store.calculateResults())
const maxScore = 10 // Ajustez selon votre échelle

const formatSkill = (skill) => {
    return skill.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
}
</script>
