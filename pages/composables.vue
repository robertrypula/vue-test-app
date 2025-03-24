<script setup lang="ts">
const test = ref<string>('test');

const { x, y } = useMouse();
</script>

<template>
    <div>
        <h1>Composables {{ test }}</h1>

        {{ x }} - {{ y }}
    </div>
</template>
