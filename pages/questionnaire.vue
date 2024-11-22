<template>
    <div class="w-full h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-2xl w-full p-4">
            <template v-if="!userDataSubmitted">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h2 class="text-2xl font-bold mb-6">Informations Personnelles</h2>
                    <form @submit.prevent="handleUserSubmit" class="space-y-4">
                        <div>
                            <label class="block mb-1">Nom</label>
                            <input v-model="formData.nom" type="text" required class="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label class="block mb-1">Prénom</label>
                            <input v-model="formData.prenom" type="text" required class="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label class="block mb-1">Email</label>
                            <input v-model="formData.email" type="email" required class="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label class="block mb-1">Contact</label>
                            <input v-model="formData.contact" type="tel" required class="w-full border p-2 rounded" />
                        </div>
                        <button type="submit"
                            class="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                            Commencer le questionnaire
                        </button>
                    </form>
                </div>
            </template>

            <template v-else>
                <div class="bg-white p-6 rounded-lg shadow text-center">
                    <div class="mb-4">
                        <div class="text-sm text-gray-600">
                            Question {{ currentQuestionIndex + 1 }}/{{ questions.length }}
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-orange-500 h-2 rounded-full"
                                :style="{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }"></div>
                        </div>
                    </div>

                    <div v-if="currentQuestion" class="space-y-6">
                        <h3 class="text-2xl font-semibold mb-4">{{ currentQuestion.texte }}</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <button @click="selectAnswer('A')"
                                class="p-6 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition">
                                {{ currentQuestion.optionA }}
                            </button>
                            <button @click="selectAnswer('B')"
                                class="p-6 bg-green-100 rounded-lg shadow hover:bg-green-200 transition">
                                {{ currentQuestion.optionB }}
                            </button>
                        </div>

                        <div class="flex justify-between mt-6">
                            <button @click="previousQuestion" :disabled="currentQuestionIndex === 0"
                                class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                                Précédent
                            </button>
                            <button @click="nextQuestion" :disabled="!currentAnswer"
                                class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                                {{ isLastQuestion ? 'Terminer' : 'Suivant' }}
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuestionnaireStore } from '~/stores/questionnaire'

const store = useQuestionnaireStore()
const userDataSubmitted = ref(false)
const currentQuestionIndex = ref(0)
const currentAnswer = ref(null)
const formData = ref({
    nom: '',
    prenom: '',
    email: '',
    contact: ''
})

const questions = computed(() => store.questions)
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
const isLastQuestion = computed(() => currentQuestionIndex.value === questions.value.length - 1)

const handleUserSubmit = () => {
    store.setUserData(formData.value)
    userDataSubmitted.value = true
}

const selectAnswer = (answer) => {
    currentAnswer.value = answer
    store.saveAnswer(currentQuestion.value.id, answer)
    if (isLastQuestion.value) {
        navigateTo('/results')
    } else {
        currentQuestionIndex.value++
        currentAnswer.value = null
    }
}

const nextQuestion = () => {
    if (currentAnswer.value) {
        store.saveAnswer(currentQuestion.value.id, currentAnswer.value)
        if (isLastQuestion.value) {
            navigateTo('/results')
        } else {
            currentQuestionIndex.value++
            currentAnswer.value = null
        }
    }
}

const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--
        currentAnswer.value = store.answers[currentQuestion.value.id] || null
    }
}
</script>