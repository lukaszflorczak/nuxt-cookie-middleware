export default defineNuxtRouteMiddleware((to) => {
  if (/\/dashboard\/|\/dashboard$/.test(to.path.toLowerCase())) {
    return navigateTo('/');
  }
});
