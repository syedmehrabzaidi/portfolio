<template>
  <Container :fluid="true" custom-class="home-about-section" id="about">
    <Container>
      <Row>
        <TheCol md="8" class="home-about-description">
          <h1 style="font-size: 2.6em">LET ME <span class="azure"> INTRODUCE </span> MYSELF</h1>
          <p class="home-about-body">
            I'm a Python developer with a passion for Artificial Intelligence and its practical applications.
            Currently, I'm working on an AI-powered chatbot project where I focus on AI model integration,
            including RAG (Retrieval-Augmented Generation) systems and model fine-tuning. I handle GPU server
            for model deployment. My journey in programming revolves around exploring new possibilities in AI,
            and I'm always eager to learn and implement the latest advancements in the field. Every day presents
            an opportunity to grow and expand my knowledge in AI, which keeps me motivated and excited about what's
            possible in this ever-evolving domain.
            <br />
            <br />I am fluent in classics like
            <i>
              <b class="azure"> Python. </b>
            </i>
            <br />
            <br />
            My field of interest includes building new &nbsp;
            <i>
              <b class="azure"> Web Technologies and Products </b> and also areas related to
              <b class="azure"> AI, ML, and LLMs. </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with
            <i>
              <b class="azure"> Modern Frameworks and Libraries </b>
            </i>
            &nbsp; like
            <i>
              <b class="azure"> Django, FastAPI, and Next.js. </b>
            </i>
          </p>
        </TheCol>
        <TheCol md="4" custom-class="myAvtar">
          <Tilt>
            <img src="@/assets/avatar.png" class="img-fluid" alt="avatar" />
          </Tilt>
        </TheCol>
      </Row>
      <Row>
        <TheCol md="12" custom-class="home-about-social">
          <h1>FIND ME ON</h1>
          <p>Feel free to <span class="azure">connect</span> with me</p>
          <ul class="home-about-social-links">
            <li class="social-icons">
              <a
                href="https://github.com/syedmehrabzaidi"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://www.linkedin.com/in/syed-mehrab-18934220a/"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://stackoverflow.com/#"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'stack-overflow']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://www.facebook.com/#/"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
            </li>
          </ul>
        </TheCol>
      </Row>
    </Container>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheCol from '@/components/bootstrap/Col.vue' // Importing custom Bootstrap components
import Row from '@/components/bootstrap/Row.vue' // Importing custom Bootstrap components
import Container from '@/components/bootstrap/Container.vue' // Importing custom Bootstrap components
import Tilt from './Tilt.vue'

export default defineComponent({
  name: 'TheHome2',
  components: {
    Container,
    Row,
    TheCol,
    Tilt
  }
})
</script>

<style scoped>
.home-about-description {
  text-align: left;
}

.azure {
  color: #007bff;
}

.myAvtar img {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
}
</style>