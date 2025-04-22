<script setup lang="ts">
const route = useRoute();
const boardStore = useBoardStore();

const task = computed(() => {
    return boardStore.getTask(route.params.id);
});

</script>

<template>
    

    <pre>{{ route.params.id }}</pre>

    <h1>{{ task.name }}</h1>
    <h1>{{ task.description }}</h1>
</template>
