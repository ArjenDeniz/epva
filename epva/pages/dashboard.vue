<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth-user']
})
</script>