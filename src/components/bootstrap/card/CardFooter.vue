<template>
  <div class="card-footer" v-bind="attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAttrs } from 'vue'

export default defineComponent({
  name: 'CardFooter',
  setup() {
    const attrs = useAttrs()
    return { attrs }
  }
})
</script>
