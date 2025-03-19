<template>
  <img :src="src" :alt="alt" :class="['card-img', imgClass]" v-bind="attrs" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CardImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    position: {
      type: String as () => 'top' | 'bottom',
      default: 'top'
    }
  },
  setup(props, { attrs }) {
    const imgClass = computed(() =>
      props.position === 'bottom' ? 'card-img-bottom' : 'card-img-top'
    )

    return { imgClass, attrs }
  }
})
</script>
