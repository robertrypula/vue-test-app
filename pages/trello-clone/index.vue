<script setup lang="ts">
const boardStore = useBoardStore()

</script>

<template>
    <h1>Trello Clone!</h1>

    <div>
        <pre>{{ boardStore.board }}</pre>
    </div>
</template>
