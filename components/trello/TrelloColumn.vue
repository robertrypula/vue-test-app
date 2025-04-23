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

function dropItem(event: DragEvent, { toTaskIndex, toColumnIndex }) {
    const type = event.dataTransfer.getData('type');
    const fromColumnIndex = Number(event.dataTransfer.getData('from-column-index'));

    if (type === 'task') {
        const fromTaskIndex = Number(event.dataTransfer.getData('from-task-index'));

        boardStore.moveTask({
            fromTaskIndex,
            toTaskIndex,
            fromColumnIndex,
            toColumnIndex
        });
    } else if (type === 'column') {
        boardStore.moveColumn({
            fromColumnIndex,
            toColumnIndex
        });
    }
}

function pickTask(event: DragEvent, { fromColumnIndex, fromTaskIndex }) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('type', 'task');
    event.dataTransfer.setData('from-column-index', fromColumnIndex);
    event.dataTransfer.setData('from-task-index', fromTaskIndex);
}

function pickColumn(event: DragEvent, fromColumnIndex) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('type', 'column');
    event.dataTransfer.setData('from-column-index', fromColumnIndex);
}
</script>

<template>
    <div
        class="trello-column p-4 mb-4" 
        draggable="true"
        @dragstart.self="pickColumn($event, columnIndex)"
        @dragenter.prevent 
        @dragover.prevent 
        @drop.stop="dropItem($event, { toColumnIndex: columnIndex })"
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
            @drop.stop="dropItem($event, { toTaskIndex: taskIndex, toColumnIndex: columnIndex })"
            :key="task.id" 
            class="mb-4"
            @click="goToTask(task.id)"
        >
            <strong>{{ task.name }}</strong>
            <p>{{ task.description }}</p>
        </UCard>
        <div v-else class="mb-4">
            <p>No tasks in this column</p>
        </div>

        <UInput 
            placeholder="+ Add new task" 
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
