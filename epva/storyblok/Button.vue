<template>
    <NuxtLink v-editable="blok" :to="blok.reference" class="button pb-2 pt-2 pr-4 pl-4 mb-2 mt-2 ml-2 mr-2">
        {{blok.text}}
    </NuxtLink>
</template>
<script setup>
defineProps({ blok: Object })
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  background-color: $primary-color;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: $secondary-color;
    transform: translateY(-2px);
  }
}
</style>