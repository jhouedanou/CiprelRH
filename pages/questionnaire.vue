<template>
    <div class="container mx-auto p-4">
        <div class="max-w-2xl mx-auto">
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
                        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Commencer le questionnaire
                        </button>
                    </form>
                </div>
            </template>

            <template v-else>
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="mb-4">
                        <div class="text-sm text-gray-600">
                            Question {{ currentQuestionIndex + 1 }}/{{ questions.length }}
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-500 h-2 rounded-full"
                                :style="{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }"></div>
                        </div>
                    </div>

                    <div v-if="currentQuestion" class="space-y-6">
                        <h3 class="text-lg font-semibold">{{ currentQuestion.texte }}</h3>
                        <div class="space-y-4">
                            <label class="block p-3 border rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" v-model="currentAnswer" value="A" class="mr-2">
                                {{ currentQuestion.optionA }}
                            </label>
                            <label class="block p-3 border rounded hover:bg-gray-50 cursor-pointer">
                                <input type="radio" v-model="currentAnswer" value="B" class="mr-2">
                                {{ currentQuestion.optionB }}
                            </label>
                        </div>

                        <div class="flex justify-between mt-6">
                            <button @click="previousQuestion" :disabled="currentQuestionIndex === 0"
                                class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                                Précédent
                            </button>
                            <button @click="nextQuestion" :disabled="!currentAnswer"
                                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
};
</script>