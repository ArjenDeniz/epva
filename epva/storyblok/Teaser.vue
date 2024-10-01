<template>
  <div
    v-editable="blok"
    class="deneme"
  >
    {{ blok.headline }}
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>
<style lang="scss">
.deneme{
  color: $primary-color;
}
</style>