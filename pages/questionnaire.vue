<template>
    <div class="w-full h-screen flex items-center justify-center">
        <!-- Header simplifié -->
        <nav v-if="userDataSubmitted" class="fixed top-0 left-0 right-0 bg-white shadow p-4 z-50">
            <div class="container mx-auto flex items-center justify-between">
                <!-- Logo et énoncé -->
                <div class="flex items-center space-x-4">
                    <div class="text-sm font-semibold">
                        <p class="bg-orange-600 text-white rounded-full px-2 py-1">{{ currentQuestionIndex + 1 }}/{{
                            questions.length }}
                        </p>
                    </div>
                    <br>
                    <h2 class="text-2xl text-orange-500 drop-shadow-sm font-black">{{ currentQuestion.texte
                        }}</h2>
                </div>
            </div>
        </nav>

        <div id="red" class="p-0">
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
                <transition name="slide">
                    <div class="h-screen flex flex-col">
                        <div id="sabidi" class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                            <button @click="selectAnswer('A')"
                                class="w-full h-full rounded-lg shadow hover:opacity-90 transition relative overflow-hidden"
                                :style="{ backgroundImage: `url(${currentQuestion.imageA})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                                <p
                                    class="absolute inset-0 flex items-center justify-center bg-orange-500 bg-opacity-60 rounded drop-shadow-md text-white text-3xl font-black p-2">
                                    {{ currentQuestion.optionA }}
                                </p>
                            </button>

                            <button @click="selectAnswer('B')"
                                class="w-full h-full rounded-lg shadow hover:opacity-90 transition relative overflow-hidden"
                                :style="{ backgroundImage: `url(${currentQuestion.imageB})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                                <p
                                    class="absolute inset-0 flex items-center justify-center bg-lime-800 bg-opacity-60 rounded drop-shadow-md text-white text-3xl font-black p-2">
                                    {{ currentQuestion.optionB }}
                                </p>
                            </button>
                        </div>
                    </div>
                </transition>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
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
    }
};
const preloadImages = () => {
    questions.value.forEach(question => {
        const imgA = new Image()
        const imgB = new Image()
        imgA.src = question.imageA
        imgB.src = question.imageB
    })
}

onMounted(() => {
    preloadImages()
});
</script>

<style>
.mouff {
    height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>