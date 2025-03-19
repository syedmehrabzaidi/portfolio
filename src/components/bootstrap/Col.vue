<template>
  <div :class="[colClass, customClass]" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TheCol',
  props: {
    xs: { type: [String, Number], required: false },
    sm: { type: [String, Number], required: false },
    md: { type: [String, Number], required: false },
    lg: { type: [String, Number], required: false },
    xl: { type: [String, Number], required: false },
    xxl: { type: [String, Number], required: false },
    offset: { type: [String, Number], required: false },
    order: { type: [String, Number], required: false },
    customClass: { type: String, required: false } // Custom class prop
  },
  setup(props) {
    const colClass = computed(() => {
      return [
        props.xs ? `col-${props.xs}` : null,
        props.sm ? `col-sm-${props.sm}` : null,
        props.md ? `col-md-${props.md}` : null,
        props.lg ? `col-lg-${props.lg}` : null,
        props.xl ? `col-xl-${props.xl}` : null,
        props.xxl ? `col-xxl-${props.xxl}` : null,
        props.offset ? `offset-${props.offset}` : null,
        props.order ? `order-${props.order}` : null
      ].filter(Boolean)
    })

    return { colClass }
  }
})
</script>
