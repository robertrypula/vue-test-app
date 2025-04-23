<script setup lang="ts">
definePageMeta({
  layout: 'full'
})

const boardStore = useBoardStore()
const route = useRoute();
const router = useRouter();
const newColumnName = ref('');

const isModalOpen = computed(() => {
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
    <div class="trello bg-emerald-500 p-8">
        <div v-show="isModalOpen" class="modal-container">
            <div>
                <div class="text-right">
                    <UButton @click="closeModal">Close modal</UButton>
                </div>

                <NuxtPage :key="router.fullPath" />
            </div>
        </div>

        <h1 class="mb-4 trello-board-name">{{ boardStore.board.name }}</h1>

        <div class="mb-4">
            <UInput 
                placeholder="+ Add new column" 
                v-model="newColumnName"
                @keyup.enter="addColumn"
            />
        </div>

        <div class="trello-column-wrapper">
            <TrelloColumn 
                v-for="(column, columnIndex) in boardStore.board.columns" 
                :key="column.id" 
                class="p-4 mr-4" 
                :column="column"
                :columnIndex="columnIndex"
            />
        </div>
    </div>
</template>

<style>
.trello-board-name {
    font-size: 48px;
    font-weight: bold;
}

.trello-column-wrapper {
    white-space: nowrap;
    overflow-x: auto;
}

.trello-column-wrapper * {
    white-space: wrap;
}

.trello-column-wrapper > * {
    display: inline-block;
    vertical-align: top;
    width: 300px;
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
    width: 600px;
    max-width: 100%;
    padding: 32px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1001;
}
</style>
