<template>
    <section v-editable="blok" >
        <div v-html="resolveRichText" class="content"></div>
    </section>
</template>

<script setup>
const  props = defineProps({ blok: Object })

const resolveRichText = computed( () => renderRichText(props.blok.text))
</script>
<style lang="scss" scoped>
.content{
    :deep(a) {
        color: $primary-color;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: $tertiary-color;
            text-decoration: underline;
        }
    }
}

</style>