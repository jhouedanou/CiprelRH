<template>
    <div class="max-w-2xl mx-auto">
        <div class="mb-4">
            <div class="text-sm text-gray-600">Question {{ currentIndex + 1 }}/{{ questions.length }}</div>
            <progress :value="currentIndex + 1" :max="questions.length" class="w-full"></progress>
        </div>

        <div v-if="currentQuestion" class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-lg font-semibold mb-4">{{ currentQuestion.texte }}</h3>
            <div class="space-y-4">
                <label class="block p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <input type="radio" v-model="selectedAnswer" value="A" class="mr-2">
                    {{ currentQuestion.optionA }}
                </label>
                <label class="block p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <input type="radio" v-model="selectedAnswer" value="B" class="mr-2">
                    {{ currentQuestion.optionB }}
                </label>
            </div>

            <div class="mt-6 flex justify-between">
                <button @click="previousQuestion" :disabled="currentIndex === 0"
                    class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                    Précédent
                </button>
                <button @click="nextQuestion" class="px-4 py-2 bg-blue-500 text-white rounded"
                    :disabled="!selectedAnswer">
                    {{ isLastQuestion ? 'Terminer' : 'Suivant' }}
                </button>
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
