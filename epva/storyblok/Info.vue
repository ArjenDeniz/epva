<template>
    <section class="info mt-4 pb-3 pr-4 pl-4 pt-3">
        <Text :blok="blok" />
    </section>
</template>
<script setup>
defineProps({ blok: Object })
</script>
<style lang="scss">
.info{
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid $primary-color;

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: "•";
        color: $primary-color;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>