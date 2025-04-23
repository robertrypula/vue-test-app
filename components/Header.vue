<script setup lang="ts">
</script>

<template>
    <div>
        <div style="background-color: lightgray; padding: 8px; margin-bottom: 8px;">
            Source code: <a href="https://github.com/robertrypula/vue-test-app" target="_blank">https://github.com/robertrypula/vue-test-app</a>
            <br/>
            Live app here: <a href="https://rob-vue-test-app.netlify.app" target="_blank">https://rob-vue-test-app.netlify.app</a>
        </div>

        <div>
            <NuxtLink class="link" :class="{ current: $route.path === '/' }" to="/">
                Home
            </NuxtLink>
        </div>

        <div>
            <NuxtLink class="link" :class="{ current: $route.path === '/counter' }" to="/counter">
                Counter
            </NuxtLink>
        </div>

        <div>
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
        </div>
        <div>
            <NuxtLink class="link" :class="{ current: $route.path === '/pokemon-api' }"
                to="/pokemon-api">
                pokemon-api
            </NuxtLink>
        </div>

        <div>
            <NuxtLink class="link" :class="{ current: $route.path === '/blog' }"
                to="/blog">
                BLOG
            </NuxtLink>
        </div>
        <div>
            <NuxtLink class="link" :class="{ current: $route.path === '/firebase' }"
                to="/firebase">
                Firebase
            </NuxtLink>
            |
            <NuxtLink class="link" :class="{ current: $route.path === '/firebase/new' }"
                to="/firebase/new">
                Firebase new
            </NuxtLink>
            |
            <NuxtLink class="link" :class="{ current: $route.path === '/firebase/auth' }"
                to="/firebase/auth">
                AUTH
            </NuxtLink>
        </div>

        <pre>
            TODO:
                - remove features/SetupFormComponent 
                - convert all form components into TypeScript setup
                - test pinia session storage
                - test server
        </pre>
    </div>
</template>

<style>
.current {
    font-weight: bold;
    color: black;
}
</style>