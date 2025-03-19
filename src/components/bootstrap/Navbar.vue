<template>
  <nav
    class="sticky navbar"
    :class="[
      `navbar-expand-${expand}`,
      bg ? `bg-${bg}` : '',
      variant ? `navbar-${variant}` : '',
      fixed ? `fixed-${fixed}` : '',
      sticky ? 'sticky-top' : ''
    ]"
  >
    <!-- Container Wrapper -->
    <TheContainer>
      <!-- Brand Slot -->
      <template v-if="$slots.brand">
        <slot name="brand"></slot>
      </template>

      <!-- Toggler -->
      <TheButton
        variant="link"
        :classes="['navbar-toggler', isCollapsed ? 'collapsed' : '']"
        type="button"
        @click="toggleCollapse"
        aria-controls="responsive-navbar-nav"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </TheButton>

      <!-- Collapse -->
      <div
        :class="{ show: !isCollapsed }"
        class="collapse navbar-collapse"
        id="responsive-navbar-nav"
      >
        <slot></slot>
      </div>
    </TheContainer>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TheContainer from './Container.vue'
import TheButton from './Button.vue'

export default defineComponent({
  name: 'TheNavbar',
  components: { TheContainer, TheButton },
  props: {
    bg: { type: String, required: false },
    variant: { type: String, required: false },
    fixed: { type: String, required: false },
    sticky: { type: Boolean, required: false },
    expand: { type: String, default: 'md' }, // Handles expand breakpoints (e.g., sm, md, lg)
    fluid: { type: Boolean, required: false, default: false } // Pass-through for the container
  },
  setup() {
    const isCollapsed = ref(true)

    // Toggle the collapse state
    const toggleCollapse = () => {
      isCollapsed.value = !isCollapsed.value
    }

    return {
      isCollapsed,
      toggleCollapse
    }
  }
})
</script>

<style></style>
