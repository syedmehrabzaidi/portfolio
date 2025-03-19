<template>
  <div
    ref="tiltWrapper"
    class="tilt-wrapper"
    :style="wrapperStyles"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @mouseenter="onMouseEnter"
  >
    <div class="tilt-content" :style="contentStyles">
      <slot />
      <div v-if="glareEnable" class="tilt-glare" :style="glareStyles"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'ParallaxTilt',
  props: {
    tiltEnable: { type: Boolean, default: true },
    tiltReverse: { type: Boolean, default: false },
    tiltMaxAngleX: { type: Number, default: 20 },
    tiltMaxAngleY: { type: Number, default: 20 },
    scale: { type: Number, default: 1 },
    perspective: { type: Number, default: 1000 },
    glareEnable: { type: Boolean, default: false },
    glareMaxOpacity: { type: Number, default: 0.5 },
    glareColor: { type: String, default: 'rgba(255, 255, 255, 0.5)' },
    transitionSpeed: { type: Number, default: 400 }
  },
  setup(props) {
    const tiltWrapper = ref<HTMLElement | null>(null)
    const state = reactive({
      tiltX: 0,
      tiltY: 0,
      glareAngle: 0,
      glareOpacity: 0
    })

    const wrapperStyles = reactive({
      perspective: `${props.perspective}px`
    })

    const contentStyles = reactive({
      transform: '',
      transition: `transform ${props.transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      willChange: 'transform'
    })

    const glareStyles = reactive({
      opacity: 0,
      transform: '',
      background: props.glareColor
    })

    // Define Mouse Event Handlers
    const onMouseMove = (event: MouseEvent) => {
      if (!tiltWrapper.value || !props.tiltEnable) return

      const { offsetWidth: width, offsetHeight: height } = tiltWrapper.value
      const { clientX, clientY } = event
      const rect = tiltWrapper.value.getBoundingClientRect()
      const offsetX = clientX - rect.left
      const offsetY = clientY - rect.top

      const percentX = (offsetX / width - 0.5) * 2
      const percentY = (offsetY / height - 0.5) * 2

      state.tiltX = percentX * props.tiltMaxAngleX * (props.tiltReverse ? -1 : 1)
      state.tiltY = percentY * props.tiltMaxAngleY * (props.tiltReverse ? -1 : 1)

      contentStyles.transform = `perspective(${props.perspective}px) rotateX(${
        state.tiltY
      }deg) rotateY(${state.tiltX}deg) scale3d(${props.scale}, ${props.scale}, 1)`

      if (props.glareEnable) {
        state.glareAngle = Math.atan2(percentY, percentX) * (180 / Math.PI) + 90
        state.glareOpacity =
          Math.min(Math.sqrt(percentX ** 2 + percentY ** 2), 1) * props.glareMaxOpacity
        glareStyles.opacity = state.glareOpacity
        glareStyles.transform = `rotate(${state.glareAngle}deg) translate(-50%, -50%)`
      }
    }

    const onMouseLeave = () => {
      state.tiltX = 0
      state.tiltY = 0
      state.glareOpacity = 0

      contentStyles.transform = `perspective(${props.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      glareStyles.opacity = 0
    }

    const onMouseEnter = () => {
      contentStyles.transition = `transform ${props.transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
    }

    // Return functions to template
    return {
      tiltWrapper,
      wrapperStyles,
      contentStyles,
      glareStyles,
      onMouseMove,
      onMouseLeave,
      onMouseEnter
    }
  }
})
</script>

<style scoped>
.tilt-wrapper {
  display: inline-block;
  overflow: hidden;
}
.tilt-content {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  will-change: transform;
}
.tilt-glare {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: center;
  transition: opacity 0.2s ease-out;
}
</style>
