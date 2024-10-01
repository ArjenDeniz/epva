<template>
  <div v-editable="blok" class="container pb-4 pt-4 pr-4 pl-4">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>