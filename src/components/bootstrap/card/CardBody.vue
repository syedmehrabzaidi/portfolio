<template>
  <div class="card-body" v-bind="attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAttrs } from 'vue'

export default defineComponent({
  name: 'CardBody',
  setup() {
    const attrs = useAttrs()
    return { attrs }
  }
})
</script>
