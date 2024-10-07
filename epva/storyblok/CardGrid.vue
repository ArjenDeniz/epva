<template>
    <article class="card-grid" v-editable="blok">
        <NuxtLink v-for="module in modules" :key="module.uuid" :to="'/' + module.full_slug">
            <section class="card center">
                <p class="card-text">{{ module.content.body[0].title }}</p>
            </section>
        </NuxtLink>
    </article>
</template>
<script setup>
defineProps({ blok: Object })

const modules = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'modules',
    is_startpage: false,
})
// Sort the stories array based on the numeric prefix in the name
modules.value = data.stories.sort((a, b) => {
    const aNum = parseInt(a.name.split('.')[0])
    const bNum = parseInt(b.name.split('.')[0])
    return aNum - bNum
})
</script>
<style lang="scss" scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: $primary-color;
  color: white;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: $secondary-color;
    transform: translateY(-2px);
  }
}

.card-text {
  text-align: center;
  margin: 0;
}
</style>