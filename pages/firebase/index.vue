<script setup lang="ts">
import { collection, deleteDoc, doc } from 'firebase/firestore'

const db = useFirestore()

// Firebase way
/*
const _postsCollection = ref([])
const _q = query(collection(db, "posts"))

onSnapshot(_q, (_querySnapshot) => {
    _postsCollection.value = []
    _querySnapshot.forEach((doc) => {
        _postsCollection.value.push(doc.data())
    })
});
*/

// VueFire
const postsCollection = useCollection(collection(db, 'posts'))

const deletePost = async (id: string) => {
    console.log(id)
    await deleteDoc(doc(db, 'posts', id))
}
</script>

<template>
    <div>
        <h1>Firebase</h1>

        <h2>VueFire way (simpler)</h2>
        <ul>
            <li v-for="post in postsCollection" :key="post.id">
                <pre>{{ post }}</pre>
                <NuxtLink :to="`/firebase/${post.id}`">Edit</NuxtLink>
                <button @click="deletePost(post.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>