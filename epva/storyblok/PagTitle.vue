<template>
  <section
    v-editable="blok"
    class=""
  >
    <h1 class="title center mb-4 pt-2 pb-2">{{ blok.title }}</h1>
  </section>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>
<style lang="scss">
.title{
    font-size: 2rem;
    border-bottom: 2px solid $primary-color;
}
</style>