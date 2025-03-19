<template>
  <div :class="['card', bgClass, borderClass, textClass]" v-bind="attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TheCard',
  props: {
    bg: String,
    text: String,
    border: String
  },
  setup(props, { attrs }) {
    const bgClass = computed(() => (props.bg ? `bg-${props.bg}` : null))
    const textClass = computed(() => (props.text ? `text-${props.text}` : null))
    const borderClass = computed(() => (props.border ? `border-${props.border}` : null))

    return {
      bgClass,
      textClass,
      borderClass,
      attrs
    }
  }
})
</script>
