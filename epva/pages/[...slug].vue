<script setup>
const { slug } = useRoute().params
 
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
)
definePageMeta({
  middleware: ['auth']
})
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>