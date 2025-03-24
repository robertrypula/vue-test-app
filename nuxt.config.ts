// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/ui',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxt/test-utils',
        '@vee-validate/nuxt',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-vuefire'
    ],

    content: {
        highlight: {
            theme: 'github-light'
        }
    },

    vuefire: {
        config: {
            apiKey: '',
            authDomain: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: '',
            measurementId: ''
        },
    },
})