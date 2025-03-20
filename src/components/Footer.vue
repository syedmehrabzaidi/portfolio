<template>
  <Container custom-class="footer" :fluid="true">
    <Row>
      <Column md="4" custom-class="footer-copywright">
        <h3>Designed and Developed by Syed Mehrab</h3>
      </Column>
      <Column md="4" custom-class="footer-copywright">
        <h3>
          Copyright © {{ year }} <strong>{{ "<syedM. />" }}</strong>
        </h3>
      </Column>
      <Column md="4" custom-class="footer-body">
        <ul class="footer-icons">
          <li class="social-icons">
            <a
              href="https://github.com/syedmehrabzaidi"
              target="_blank"
              rel="noreferrer"
              style="color: white"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://www.linkedin.com/in/syed-mehrab-18934220a/"
              target="_blank"
              rel="noreferrer"
              style="color: white"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://stackoverflow.com/#"
              target="_blank"
              rel="noreferrer"
              style="color: white"
            >
              <font-awesome-icon :icon="['fab', 'stack-overflow']" />
            </a>
          </li>
          <li class="social-icons">
            <a
            
            >
              <font-awesome-icon :icon="['fab', 'medium-m']" />
            </a>
          </li>
          <li class="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              style="color: white"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
        </ul>
      </Column>
    </Row>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Container from './bootstrap/Container.vue'
import Row from './bootstrap/Row.vue'
import Column from './bootstrap/Col.vue'

export default defineComponent({
  name: 'TheFooter',
  components: {
    Container,
    Row,
    Column
  },
  setup() {
    const year = ref(new Date().getFullYear())
    return { year }
  }
})
</script>

<style scoped></style>
