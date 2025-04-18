<template>
    <Header />

    <div class="layout">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.layout {
    margin: 32px auto;
    border: 1px solid lightgray;
    padding: 32px;
}
</style>
