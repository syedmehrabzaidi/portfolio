import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faStar,
  faHandPointRight,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faFacebook,
  faMediumM,
  faJs,
  faNode,
  faVuejs,
  faReact,
  faPython,
  faGitAlt,
  faAws,
  faApple,
  faSlack
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import VuePdf from 'vue3-pdfjs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/main.css'

library.add(
  faHome,
  faUser,
  faEnvelope,
  faDesktop,
  faFileLines,
  faPenNib,
  faCodeBranch,
  faStar,
  faGithub,
  faLinkedin,
  faStackOverflow,
  faFacebook,
  faMediumM,
  faHandPointRight,
  faJs,
  faNode,
  faVuejs,
  faReact,
  faPython,
  faGitAlt,
  faGithub,
  faAws,
  faApple,
  faSlack,
  faArrowDown
)

import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.use(Particles, {
  init: async (engine) => {
    // Load the tsParticles engine with all the available features
    await loadFull(engine)
  }
})

app.use(VuePdf)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
