<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseAuth } from 'vuefire'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'

const userInput = ref({
    email: '',
    password: '',
})

const auth = useFirebaseAuth()
const user = useCurrentUser()

async function createUser() {
    createUserWithEmailAndPassword(
        auth,
        userInput.value.email,
        userInput.value.password
    )
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // ..
        })
}

async function signInToFirebase() {
    signInWithEmailAndPassword(
        auth,
        userInput.value.email,
        userInput.value.password
    )
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
}

async function signOutOfFirebase() {
    try {
        await auth.signOut()
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <BaseContainer>
        <h1>FirebaseAuth</h1>

        <pre>{{ user }}</pre>
        <pre style="">{{ auth }}</pre>

        <h1 class="mb-4">User</h1>

        <div>
            <BaseButton v-if="user?.email" @click="signOutOfFirebase">Sign Out</BaseButton>
        </div>

        <BaseInput v-model="userInput.email" type="email" label="Email" required
            placeholder="eleanorshellstrop@thegoodplace.com" />
        <BaseInput v-model="userInput.password" label="Password" type="password" required />

        <BaseButton @click="signInToFirebase" variant="tonal" color="success">
            Sign In
        </BaseButton>
        <BaseButton @click="createUser" variant="tonal" color="secondary" outline>
            Create New User
        </BaseButton>

    </BaseContainer>
</template>

<style lang="scss" scoped>
pre {
    line-height: 1em;
    font-size: 10px;
    max-height: 400px;
    overflow-y: auto;
}
</style>
