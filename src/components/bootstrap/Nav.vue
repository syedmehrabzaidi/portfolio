<template>
  <div
    :class="[
      variant ? `nav-${variant}` : '',
      fill ? 'nav-fill' : '',
      justify ? 'nav-justified' : '',
      navbar ? 'navbar-nav' : '',
      navbarScroll ? 'navbar-nav-scroll' : ''
    ]"
    class="ms-auto"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNav',
  props: {
    variant: { type: String, default: null },
    fill: { type: Boolean, default: false },
    justify: { type: Boolean, default: false },
    navbar: { type: Boolean, default: false },
    navbarScroll: { type: Boolean, default: false }
  }
})
</script>
