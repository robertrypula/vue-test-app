export default defineNuxtRouteMiddleware((to, from) => {
    const currentUser = useCookie('current-user')
    const isAuthenticated = useCookie('is-authenticated')

    if (!isAuthenticated.value) {
        // return navigateTo('/')
    } else if (to.params.username !== currentUser.value) {
        // return navigateTo('/pokemon-api/' + currentUser.value)
    }

    console.log('--- Profile Middleware ---')
})
