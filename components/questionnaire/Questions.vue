<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm font-medium text-gray-600">Question {{ currentIndex + 1 }}/{{
                            questions.length }}</span>
                        <span class="text-sm font-medium text-orange-600">{{ Math.round(((currentIndex + 1) /
                            questions.length) * 100) }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-orange-500h-2 rounded-full transition-all duration-300"
                            :style="{ width: `${((currentIndex + 1) / questions.length) * 100}%` }"></div>
                    </div>
                </div>

                <div v-if="currentQuestion" class="space-y-6">
                    <h3 class="text-xl font-semibold text-gray-900">{{ currentQuestion.texte }}</h3>

                    <div class="space-y-4">
                        <label
                            class="block p-4 border rounded-lg cursor-pointer transition-all hover:bg-orange-50 hover:border-orange-200"
                            :class="{ 'bg-orange-50 border-orange-300': selectedAnswer === 'A' }">
                            <input type="radio" v-model="selectedAnswer" value="A" class="sr-only">
                            <div class="flex items-center">
                                <div class="w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center"
                                    :class="{ 'border-orange-500': selectedAnswer === 'A' }">
                                    <div v-if="selectedAnswer === 'A'" class="w-3 h-3 bg-orange-500 rounded-full"></div>
                                </div>
                                <span class="text-gray-700">{{ currentQuestion.optionA }}</span>
                            </div>
                        </label>

                        <label
                            class="block p-4 border rounded-lg cursor-pointer transition-all hover:bg-orange-50 hover:border-orange-200"
                            :class="{ 'bg-orange-50 border-orange-300': selectedAnswer === 'B' }">
                            <input type="radio" v-model="selectedAnswer" value="B" class="sr-only">
                            <div class="flex items-center">
                                <div class="w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center"
                                    :class="{ 'border-orange-500': selectedAnswer === 'B' }">
                                    <div v-if="selectedAnswer === 'B'" class="w-3 h-3 bg-orange-500 rounded-full"></div>
                                </div>
                                <span class="text-gray-700">{{ currentQuestion.optionB }}</span>
                            </div>
                        </label>
                    </div>

                    <div class="flex justify-between pt-6">
                        <button @click="previousQuestion" :disabled="currentIndex === 0"
                            class="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            Précédent
                        </button>
                        <button @click="nextQuestion" :disabled="!selectedAnswer"
                            class="px-6 py-2 bg-orange-500text-white rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            {{ isLastQuestion ? 'Terminer' : 'Suivant' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const store = useQuestionnaireStore()
const currentIndex = ref(0)
const selectedAnswer = ref(null)

const questions = computed(() => store.questions)
const currentQuestion = computed(() => questions.value[currentIndex.value])
const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)

const nextQuestion = () => {
    if (selectedAnswer.value) {
        store.saveAnswer(currentQuestion.value.id, selectedAnswer.value)
        if (isLastQuestion.value) {
            navigateTo('/results')
        } else {
            currentIndex.value++
            selectedAnswer.value = null
        }
    }
}

const previousQuestion = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        selectedAnswer.value = store.getAnswer(currentQuestion.value.id)
    }
}
</script>
