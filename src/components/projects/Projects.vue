<template>
  <Container :fluid="true" custom-class="project-section">
    <Particle />
    <Container>
      <h1 class="project-heading">My Recent <strong class="blue">Works </strong></h1>
      <p style="color: white">Here are a few projects I've worked on recently.</p>
      <Row style="justify-content: center; padding-bottom: 10px">
        <!-- Chatify Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>

        <!-- Bits-Of-Code Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>

        <!-- Editor.io Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>

        <!-- Plant AI Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>

        <!-- AI For Social Good Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>

        <!-- Face Recognition and Emotion Detection Project -->
        <TheCol :md="4" custom-class="project-card">
          <ProjectCard
            :imgPath="chatify"
            :isBlog="false"
            title="Chatify"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            ghLink="https://github.com/soumyajit4419/Chatify"
            demoLink="https://chatify-49.web.app/"
          />
        </TheCol>
      </Row>
    </Container>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/bootstrap/Container.vue'
import Row from '@/components/bootstrap/Row.vue'
import TheCol from '@/components/bootstrap/Col.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import Particle from '@/components/Particles.vue'
import chatify from '@/assets/projects/chatify.png'

export default defineComponent({
  name: 'TheProjects',
  components: {
    Container,
    Row,
    TheCol,
    ProjectCard,
    Particle
  },
  data() {
    return {
      chatify
    }
  }
})
</script>

<style scoped></style>
