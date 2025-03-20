<template>
  <Container :fluid="true" custom-class="home-about-section" id="about">
    <Container>
      <Row>
        <TheCol md="8" class="home-about-description">
          <h1 style="font-size: 2.6em">LET ME <span class="azure"> INTRODUCE </span> MYSELF</h1>
          <p class="home-about-body">
            I've fallen in love with programming and picked up a thing or two along the way… I
            think… 🤔💻
            <br />
            <br />I am fluent in classics like
            <i>
              <b class="azure"> Javascript and Python. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b class="azure">Web Technologies and Products </b> and also in areas related
              <b class="azure"> AI, ML and LLMs. </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with
            <b class="azure">Node.js</b> and
            <i>
              <b class="azure"> Modern Javascript Libraries and Frameworks </b>
            </i>
            &nbsp; like
            <i>
              <b class="azure"> Vue.js and React.js </b>
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
                href="https://www.linkedin.com/in/muneer-ahmed-a59362140/"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://stackoverflow.com/users/8422060/muneer-khan"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'stack-overflow']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://medium.com/@muneerkhan31886"
                target="_blank"
                rel="noreferrer"
                class="icon-colour home-social-icons"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" />
              </a>
            </li>
            <li class="social-icons">
              <a
                href="https://www.facebook.com/muneerkhan555/"
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
