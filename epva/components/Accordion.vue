<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
    >
      <div
        class="accordion-header"
        @click="toggleItem(index)"
        :class="{ 'active': isItemActive(index) }"
      >
        <slot name="header" :item="item" :index="index">
          {{ item.header }}
        </slot>
      </div>
      <transition
        name="accordion"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
      >
        <div v-if="isItemActive(index)" class="accordion-content">
          <slot name="content" :item="item" :index="index">
            <div v-html="item.content"></div>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const activeIndexes = ref([])

const isItemActive = (index) => {
  return activeIndexes.value.includes(index)
}

const toggleItem = (index) => {
  if (props.multiple) {
    const itemIndex = activeIndexes.value.indexOf(index)
    if (itemIndex > -1) {
      activeIndexes.value.splice(itemIndex, 1)
    } else {
      activeIndexes.value.push(index)
    }
  } else {
    activeIndexes.value = activeIndexes.value[0] === index ? [] : [index]
  }
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
.accordion {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  &-item {
    border: 1px solid #e0e0e0;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }

  &-header {
    background-color: #f8f9fa;
    padding: 1rem 1.5rem;
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
      background-color: #3498db;
      color: #ffffff;
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

  &-content {
    background-color: #ffffff;
    overflow: hidden;
    will-change: height;
    transition: height 0.3s ease;
    padding: 0 1.5rem;

    :deep(h2) {
      font-size: 1.5em;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    :deep(h3) {
      font-size: 1.3em;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: #34495e;
    }

    :deep(h4) {
      font-size: 1.1em;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: #3498db;
    }

    :deep(p) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      color: #34495e;
      line-height: 1.6;
    }

    :deep(ul) {
      padding-left: 1.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    :deep(a) {
      color: black;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #2980b9;
        text-decoration: underline;
      }
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