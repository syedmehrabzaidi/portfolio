import { createRouter, createWebHistory } from 'vue-router'

// Import your component routes
import Home from '../components/home/Home.vue'
import About from '../components/about/About.vue'
import Projects from '../components/projects/Projects.vue'
import Resume from '../components/resume/Resume.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/resume', component: Resume },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Export the router instance for use in main.ts
export default router
