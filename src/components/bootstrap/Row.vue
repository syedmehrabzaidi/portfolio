<template>
  <div :class="rowClass" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TheRow',
  props: {
    xs: { type: [String, Number, Object], required: false },
    sm: { type: [String, Number, Object], required: false },
    md: { type: [String, Number, Object], required: false },
    lg: { type: [String, Number, Object], required: false },
    xl: { type: [String, Number, Object], required: false },
    xxl: { type: [String, Number, Object], required: false }
  },
  setup(props) {
    const rowClass = computed(() => {
      return [
        'row',
        props.xs ? `row-cols-${props.xs}` : null,
        props.sm ? `row-cols-sm-${props.sm}` : null,
        props.md ? `row-cols-md-${props.md}` : null,
        props.lg ? `row-cols-lg-${props.lg}` : null,
        props.xl ? `row-cols-xl-${props.xl}` : null,
        props.xxl ? `row-cols-xxl-${props.xxl}` : null
      ].filter(Boolean)
    })

    return { rowClass }
  }
})
</script>
