<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const boardStore = useBoardStore();

const task = computed(() => {
    return boardStore.getTask(route.params.id);
});

function deleteTask(taskId: string) {
    boardStore.deleteTask(taskId);
    router.push('/trello-clone');
}
</script>

<template>
    <div v-if="task">
        <div class="mb-4">
            <UButton icon="i-heroicons-trash" color="error" @click="deleteTask(task.id)">
                Delete task
            </UButton>
        </div>
        <div class="mb-4">
            <UFormField  label="Name">
                <UInput v-model="task.name" />
            </UFormField >
        </div>
        <div class="mb-4">
            <UFormField  label="Description">
                <UTextarea v-model="task.description"></UTextarea>
            </UFormField >
        </div>
    </div>

    <div v-else>
        <p>No task found</p>
    </div>
</template>
