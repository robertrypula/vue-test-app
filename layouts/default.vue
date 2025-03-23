<template>
    <nav class="nav">
        <NuxtLink class="link" :class="{ current: $route.path === '/' }" to="/">
            Home
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/1-plain-html' }" to="/form/1-plain-html">
            Form/1-plain-html
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/2-vue-components' }"
            to="/form/2-vue-components">
            Form/2-vue-components
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/3-vee-validate' }" to="/form/3-vee-validate">
            Form/3-vee-validate
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/4-vee-validate-with-yup' }"
            to="/form/4-vee-validate-with-yup">
            Form/4-vee-validate-with-yup
        </NuxtLink>
        |
        <NuxtLink class="link" :class="{ current: $route.path === '/form/lazy-validation-login' }"
            to="/form/lazy-validation-login">
            Form/lazy-validation-login
        </NuxtLink>
    </nav>

    <pre>
        TODO:
            - remove features/SetupFormComponent 
            - convert all form components into TypeScript setup
            - test pinia session storage
            - test server
    </pre>

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

.nav {
    color: lightgray;

    .current {
        font-weight: bold;
        color: black;
    }
}
</style>
