export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $getCurrentUser } = useNuxtApp()

  try {
    const user = await $getCurrentUser()

    if (user && to.path === '/login') {
      return navigateTo('/')
    }

    if (!user && to.path !== '/login') {
      return navigateTo('/login')
    }
  } catch (error) {
    console.error('Authentication check failed:', error)
    return navigateTo('/login')
  }
})