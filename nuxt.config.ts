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
        auth: {
            enabled: true
        },
        /*
        appCheck: {
            // Allows you to use a debug token in development
            debug: process.env.NODE_ENV !== 'production',
            isTokenAutoRefreshEnabled: true,
            provider: 'ReCaptchaV3',
            // Find the instructions in the Firebase documentation, link above
            // key: '...',
        },
        */
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