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
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 4px;
    overflow: hidden;
  }

  &-header {
    background-color: #f5f5f5;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: #e5e5e5;
    }

    &.active {
      background-color: #e0e0e0;
    }
  }

  &-content {
    background-color: #fff;
    overflow: hidden;
    will-change: height;
    transition: height 0.3s ease;
    padding: 0 15px;

    :deep(h2) {
      font-size: 1.5em;
      margin-top: 0.83em;
      margin-bottom: 0.83em;
    }

    :deep(h3) {
      font-size: 1.17em;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    :deep(h4) {
      font-size: 1em;
      margin-top: 1.33em;
      margin-bottom: 1.33em;
    }

    :deep(p) {
      margin-top: 1em;
      margin-bottom: 1em;
    }

    :deep(ul) {
      padding-left: 20px;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    :deep(a) {
      color: #0645ad;
      text-decoration: none;

      &:hover {
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