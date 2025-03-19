<template>
  <Container :fluid="true" custom-class="resume-section">
    <Particle />
    <Row style="justify-content: center; position: relative">
      <TheButton variant="primary" :href="pdf" target="_blank" style="max-width: 250px">
        <font-awesome-icon :icon="['fa', 'arrow-down']" />
        &nbsp;Download CV
      </TheButton>
    </Row>

    <Row class="resume">
      <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" />
    </Row>

    <Row style="justify-content: center; position: relative">
      <TheButton variant="primary" :href="pdf" target="_blank" style="max-width: 250px">
        <font-awesome-icon :icon="['fa', 'arrow-down']" />
        &nbsp;Download CV
      </TheButton>
    </Row>
  </Container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { VuePdf, createLoadingTask } from 'vue3-pdfjs'
import Particle from '@/components/Particles.vue'
import pdf from '@/assets/Muneer-Ahmed-Resume.pdf'
import Container from '@/components/bootstrap/Container.vue'
import Row from '@/components/bootstrap/Row.vue'
import TheButton from '@/components/bootstrap/Button.vue'

export default defineComponent({
  name: 'ResumeNew',
  data() {
    return {
      pdf
    }
  },
  components: {
    Container,
    Row,
    TheButton,
    Particle,
    VuePdf
  },
  setup() {
    const pdfSrc = ref<any>(pdf)
    const numOfPages = ref(0)

    onMounted(() => {
      const loadingTask = createLoadingTask(pdfSrc.value)
      loadingTask.promise.then((pdf: any) => {
        numOfPages.value = pdf.numPages
      })
    })
    return {
      pdfSrc,
      numOfPages
    }
  }
})
</script>

<style scoped></style>
