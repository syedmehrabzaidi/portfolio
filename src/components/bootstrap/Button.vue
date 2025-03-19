<template>
  <button
    :class="[
      'btn', // Always apply the 'btn' class
      variant ? `btn-${variant}` : '', // Apply variant if available
      size ? `btn-${size}` : '', // Apply size if available
      { active: isActive, disabled: isDisabled }, // Apply active and disabled classes
      classes
    ]"
    :disabled="isDisabled"
    :type="type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

export type ButtonSize = 'sm' | 'lg'

export type ButtonType = 'button' | 'submit' | 'reset'

export default defineComponent({
  name: 'TheButton',
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      required: false,
      default: 'primary'
    },
    size: {
      type: String as PropType<ButtonSize>,
      required: false,
      default: null
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String as PropType<ButtonType>,
      required: false,
      default: 'button'
    },
    classes: {
      type: [String, Array, Object],
      required: false,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.active
    },
    isDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick(event: MouseEvent) {
      // Stop event propagation if needed
      event.stopPropagation()
      // Emit the click event to the parent

      // commented out because it was toggling the event twice
      // this.$emit('click', event)
    }
  }
})
</script>

<style scoped>
/* Custom button styles can be added here */
</style>
