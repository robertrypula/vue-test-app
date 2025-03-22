<script setup lang="ts">
const test = ref<string>('test');
const counter = ref<number>(0);

const increment = () => {
    counter.value++;
}
</script>

<template>
    <h1>test {{ test }} - {{ counter }}</h1>

    <button @click="increment()">Increment</button>
</template>
