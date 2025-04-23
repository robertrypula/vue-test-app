<script setup lang="ts">
const props = defineProps({
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
const newTaskName = ref('');

function deleteColumn(columnIndex: number) {
    boardStore.deleteColumn(columnIndex);
}

function goToTask(taskId: string) {
    router.push(`/trello-clone/${taskId}`);
}

function addTask() {
    boardStore.addTask({ 
        taskName: newTaskName.value,
        columnIndex: props.columnIndex,
    });
    newTaskName.value = ''
}

function dropTask(event: DragEvent, toColumnIndex) {
    console.log('Drop event:', event);
    const fromColumnIndex = Number(event.dataTransfer.getData('from-column-index'));
    const fromTaskIndex = Number(event.dataTransfer.getData('from-task-index'));

    boardStore.moveTask({
        taskIndex: fromTaskIndex,
        fromColumnIndex,
        toColumnIndex
    });
}

function pickTask(event: DragEvent, { fromColumnIndex, fromTaskIndex }) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('from-column-index', fromColumnIndex);
    event.dataTransfer.setData('from-task-index', fromTaskIndex);
}
</script>

<template>
    <div
        class="trello-column p-4 mb-4" 
        @dragenter.prevent 
        @dragover.prevent 
        @drop.stop="dropTask($event, columnIndex)"
    >
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
            v-for="(task, taskIndex) in column.tasks" 
            draggable="true"
            @dragstart="pickTask($event, {
                fromTaskIndex: taskIndex,
                fromColumnIndex: columnIndex,
            })"
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

        <UInput 
            placeholder="+ Add new task" 
            icon="i-heroicons-plus-circle-solid"
            v-model="newTaskName"
            @keyup.enter="addTask"
        />
    </div>
</template>

<style>
.trello-column {
    background-color: lightgray;
}
</style>
