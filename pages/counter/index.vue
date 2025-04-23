<script setup lang="ts">
const test = ref<string>('test');
const counterStore = useCounterStore();
</script>

<template>
    <h1>test {{ test }} - {{ counterStore.count }}</h1>

    <button @click="counterStore.increment()">Increment</button>
</template>
