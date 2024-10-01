<template>
    <section v-editable="blok" >
        <div v-html="resolveRichText" class="content"></div>
    </section>
</template>

<script setup>
const  props = defineProps({ blok: Object })

const resolveRichText = computed( () => renderRichText(props.blok.text))
</script>