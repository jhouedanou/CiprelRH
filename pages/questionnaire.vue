<template>
    <div>
        <template v-if="!userDataSubmitted">
            <UserForm @submit="handleUserSubmit" />
        </template>
        <template v-else>
            <Questions />
        </template>
    </div>
</template>

<script setup>
import { useQuestionnaireStore } from '@/stores/questionnaire'
const store = useQuestionnaireStore()
const userDataSubmitted = ref(false)

const handleUserSubmit = (userData) => {
    store.setUserData(userData)
    userDataSubmitted.value = true
}
</script>
