<script setup lang="ts">
defineProps({
    column: {
        type: Object,
        required: true
    },
    columnIndex: {
        type: Number,
        required: true
    }
})

const router = useRouter();
const boardStore = useBoardStore();
const editNameState = ref(false);

function deleteColumn(columnIndex: number) {
    boardStore.deleteColumn(columnIndex);
}

function goToTask(taskId: string) {
    router.push(`/trello-clone/${taskId}`);
}
</script>

<template>
    <UContainer class="container p-4 mb-4">
        <div class="mb-4">
            <h4 v-if="!editNameState" class="mb-4">{{ column.name }}</h4>
            <UInput v-else v-model="column.name" />
        </div>

        <div class="mb-4">
            <UButton icon="i-heroicons-pencil-square" class="mr-2" @click="editNameState = !editNameState" />
            <UButton icon="i-heroicons-trash" color="error" @click="deleteColumn(columnIndex)" />
        </div>

        <UCard 
            v-if="column.tasks.length" 
            v-for="task in column.tasks" 
            :key="task.id" 
            class="mb-4"
            @click="goToTask(task.id)"
        >
            <strong>{{ task.name }}</strong>
            <p>{{ task.description }}</p>
        </UCard>
        <template v-else>
            <UCard class="mb-4">
                <p>No tasks in this column</p>
            </UCard>
        </template>
    </UContainer>
</template>
