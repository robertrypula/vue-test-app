<script setup lang="ts">
definePageMeta({
  layout: 'full'
})

const boardStore = useBoardStore()
const newColumnName = ref('');

function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
}
</script>

<template>
    <div class="trello bg-emerald-500">
        <h1 class="mb-4">{{ boardStore.board.name }}</h1>

        <UContainer class="container p-4 mb-4">
            <UCard class="mb-4">
                <UInput 
                    placeholder="+ Add new column" 
                    icon="i-heroicons-plus-circle-solid"
                    v-model="newColumnName"
                    @keyup.enter="addColumn"
                />
            </UCard>
        </UContainer>

        <div class="container-wrapper">
            <TrelloColumn 
                v-for="(column, columnIndex) in boardStore.board.columns" 
                :key="column.id" 
                class="container p-4 mb-4" 
                :column="column"
                :columnIndex="columnIndex"
            />
        </div>
    </div>
</template>

<style>
.container {
    background-color: lightgray;
}
</style>