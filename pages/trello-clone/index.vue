<script setup lang="ts">
const boardStore = useBoardStore()

</script>

<template>
    <div class="trello">
        <h1>{{ boardStore.board.name }}</h1>

        <UContainer v-for="column in boardStore.board.columns" :key="column.name">
            <h2>{{ column.name }}</h2>

            <div v-for="task in column.tasks" :key="task.id">
                <UCard>
                    <strong>{{ task.name }}</strong>
                    <p>{{ task.description }}</p>
                </UCard>
            </div>
        </UContainer>
    </div>
</template>

<style>
.trello {
    background-color: lightblue;
}
</style>