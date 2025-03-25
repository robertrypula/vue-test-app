<script setup lang="ts">
import { collection, query, getDocs, onSnapshot, addDoc } from 'firebase/firestore'

const router = useRouter()

const newPost = ref({
    title: '',
    description: ''
});

const db = useFirestore()

const addNewPost = async () => {
    const newDoc = await addDoc(collection(db, "posts"), {
        ...newPost.value
    });

    if (newDoc.id) {
        router.push('/firebase');
    }
}
</script>

<template>
    <div>
        <h1>Firebase - new post</h1>

        <BaseInput v-model="newPost.title" label="Title" />
        <BaseInput v-model="newPost.description" label="Description" />

        <button @click="addNewPost">Add new</button>
    </div>
</template>