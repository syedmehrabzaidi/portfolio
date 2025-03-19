<template><span></span></template>
<script lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ScrollToTop',
  setup() {
    const route = useRoute()

    // Watch for changes in route path and scroll to the top
    watch(
      () => route.path,
      () => {
        window.scrollTo(0, 0)
      }
    )

    // Ensure scroll happens on the initial render
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
}
</script>
