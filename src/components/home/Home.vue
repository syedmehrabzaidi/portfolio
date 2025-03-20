<template>
  <section>
    <TheContainer :fluid="true" custom-class="home-section" id="home">
      <Particle />
      <TheContainer custom-class="home-content">
        <TheRow>
          <TheCol md="7" custom-class="home-header">
            <h1 class="heading" style="padding-bottom: 15px">
              Good day
              <span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <h1 class="heading-name">
              I'M
              <strong class="main-name"> Syed Mehrab</strong>
            </h1>

            <div style="padding: 50px; text-align: left">
              <Type />
            </div>
          </TheCol>

          <TheCol md="5" style="padding-bottom: 20px">
            <img :src="homeLogo" alt="home pic" class="img-fluid" style="max-height: 450px" />
          </TheCol>
        </TheRow>
      </TheContainer>
    </TheContainer>
    <Home2 />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '../Particles.vue'
import Type from './Type.vue'
import TheContainer from '@/components/bootstrap/Container.vue'
import TheRow from '@/components/bootstrap/Row.vue'
import TheCol from '@/components/bootstrap/Col.vue'
import Home2 from './Home2.vue'
import homeLogo from '@/assets/home-main.png'

export default defineComponent({
  name: 'TheHome',
  components: {
    Particle,
    Type,
    TheContainer,
    TheRow,
    TheCol,
    Home2
  },
  data() {
    return {
      homeLogo
    }
  }
})
</script>

<style scoped>
.heading {
  font-size: 2em;
}

.heading-name {
  font-size: 2.5em;
  font-weight: bold;
}

.main-name {
  color: #007bff;
}

.wave {
  font-size: 1.5em;
}
</style>
