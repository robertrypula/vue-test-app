<script setup lang="ts">

definePageMeta({
  layout: 'full'
})

const boardStore = useBoardStore()
const route = useRoute();
const router = useRouter();
const newColumnName = ref('');

const isModalOpen = computed(() => {
    console.log('route', route.name);
    return route.name === 'trello-clone-index-id';
})

function addColumn() {
    boardStore.addColumn(newColumnName.value);
    newColumnName.value = '';
}

function closeModal() {
    router.push('/trello-clone');
}
</script>

<template>
    <div class="trello bg-emerald-500">
        <div v-show="isModalOpen" class="modal-container">
            <div>
                <NuxtPage :key="router.fullPath" />
                <UButton @click="closeModal">Close modal</UButton>
            </div>
        </div>

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

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-container > div {
    position: absolute;
    width: 800px;
    max-width: 100%;
    padding: 32px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1001;
}
</style>