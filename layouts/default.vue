<template>
    <Header />

    <div class="layout">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.layout {
    margin: 32px auto;
    max-width: 100%;
    width: 900px;
    border: 1px solid lightgray;
    padding: 32px;
}
</style>
