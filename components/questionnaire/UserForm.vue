<template>
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
        <div class="space-y-4">
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
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Continuer
            </button>
        </div>
    </form>
</template>

<script setup>
const formData = ref({
    nom: '',
    prenom: '',
    email: '',
    contact: ''
})

const emit = defineEmits(['submit'])

const submitForm = () => {
    emit('submit', formData.value)
}
</script>
