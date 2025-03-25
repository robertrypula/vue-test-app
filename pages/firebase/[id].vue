<script setup lang="ts">
import { doc, updateDoc } from 'firebase/firestore'

const db = useFirestore();
const route = useRoute();

const docRef = doc(db, 'posts', route.params.id);
const postSource = useDocument(docRef);

const editPost = ref({
    title: '',
    description: ''
});


watch(postSource, (newVal) => {
    editPost.value = {
        ...newVal
    }
});

const updatePost = async () => {
    const updatedDoc = await updateDoc(docRef, {
        ...editPost.value
    });

    console.log(updatedDoc)
}
</script>

<template>
    <div>
        <h1>Firebase - edit post</h1>

        <pre>{{ postSource }}</pre>

        <BaseInput v-model="editPost.title" label="Title" />
        <BaseInput v-model="editPost.description" label="Description" />

        <button @click="updatePost">Update</button>
    </div>
</template>