<template>
  <Container customClass="about-section" :fluid="true">
    <Particle />
    <Container>
      <Row style="justify-content: center; padding: 10px">
        <TheCol md="7" style="justify-content: center; padding-top: 30px; padding-bottom: 50px">
          <h1 style="font-size: 2.1em; padding-bottom: 20px">
            Know Who <strong class="blue">I'M</strong>
          </h1>
          <AboutCard />
        </TheCol>
        <TheCol md="5" class="about-img" style="padding-top: 120px; padding-bottom: 50px">
          <img src="@/assets/about.png" alt="about" class="img-fluid" />
        </TheCol>
      </Row>

      <h1 class="project-heading">Professional <strong class="blue">Skillset</strong></h1>
      <TechStack />

      <h1 class="project-heading"><strong class="blue">Tools</strong> I use</h1>
      <ToolStack />
      <Github />
    </Container>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '../Particles.vue'
import Github from './Github.vue'
import TechStack from './TechStack.vue'
import AboutCard from './AboutCard.vue'
import ToolStack from './ToolStack.vue'
import Container from '../bootstrap/Container.vue'
import Row from '../bootstrap/Row.vue'
import TheCol from '../bootstrap/Col.vue'

export default defineComponent({
  name: 'TheAbout',
  components: {
    Particle,
    Github,
    TechStack,
    AboutCard,
    ToolStack,
    Container,
    Row,
    TheCol
  }
})
</script>

<style scoped>
.about-section {
  width: 100%;
}

.blue {
  color: #6c63ff;
}
</style>
