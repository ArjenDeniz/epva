<template>
    <section v-editable="blok" class="accordion-item mb-2">
        <div 
        class="accordion-header pb-2 pt-2 pr-3 pl-3"
        @click="toggleItem"
        :class="{ 'active': isActive }">
            <slot name="header">{{ blok.header }}</slot>
        </div>
        <transition
        name="accordion"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition">
        <div v-if="isActive" class="accordion-content pr-3 pl-3">
            <slot name="content">
                <div v-html="resolveRichText"></div>
            </slot>
        </div>
        </transition>
    </section>
</template>

<script setup>  
const  props = defineProps({ blok: Object })

const resolveRichText = computed( () => renderRichText(props.blok.content))
const isActive = ref(false)

const toggleItem = () => {
  isActive.value = !isActive.value
}

const startTransition = (el) => {
  el.style.height = 'auto'
  const height = el.scrollHeight
  el.style.height = '0px'
  el.offsetHeight // force reflow
  el.style.height = height + 'px'
}

const endTransition = (el) => {
  el.style.height = ''
}
</script>
<style lang="scss" scoped>
.accordion-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
}
.accordion-header {
    background-color: #f8f9fa;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c3e50;
    &:hover {
        background-color: #e9ecef;
    }
    &.active {
        background-color: $primary-color;
        color: white;
    }
    &::after {
      content: '+';
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }

    &.active::after {
      transform: rotate(45deg);
    }
}
.accordion-content {
    overflow: hidden;
    will-change: height;
    transition: height 0.3s ease;
    background-color: #ffffff;
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

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s ease, height 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  height: 0 !important;
}
</style>