<template>
  <div :class="containerClass" v-bind="attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TheContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    const containerClass = computed(() => {
      // Default Bootstrap container class based on the 'fluid' prop
      return `container${props.fluid ? '-fluid' : ''} ${props.customClass}`
    })

    return { containerClass, attrs }
  }
})
</script>

<style scoped>
/* You can add custom scoped styles here if necessary */
</style>
