<template>
    <nav class="nav">
        <NuxtLink class="link" :class="{ current: $route.path === '/' }" to="/">
            Home
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/components' }" to="/form/components">
            Form/components
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/login' }" to="/form/login">
            Form/login
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/simple' }" to="/form/simple">
            Form/simple
        </NuxtLink>
    </nav>

    <div class="layout">
        <slot />
    </div>
</template>

<style scoped>
.layout {
    margin: 32px auto;
    max-width: 100%;
    width: 900px;
    border: 1px solid lightgray;
    padding: 32px;
}

.nav .current {
    font-weight: bold;
}
</style>
