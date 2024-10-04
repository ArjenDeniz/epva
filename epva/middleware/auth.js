// middleware/auth.global.js

export default defineNuxtRouteMiddleware(async (to) => {
  const { $getCurrentUser } = useNuxtApp()
  
  // Define public routes that don't require authentication
  const publicRoutes = ['/login', '/register', '/resetp']
  
  try {
    const user = await $getCurrentUser()
    
    if (!user && !publicRoutes.includes(to.path)) {
      // If user is not authenticated and trying to access a protected route, redirect to login
      return navigateTo('/login')
    }
    
    // If user is authenticated, allow access to any page, including public routes
  } catch (error) {
    console.error('Authentication check failed:', error)
    // In case of error, only redirect to login if not already on a public route
    if (!publicRoutes.includes(to.path)) {
      return navigateTo('/login')
    }
  }
})