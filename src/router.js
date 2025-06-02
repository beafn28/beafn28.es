import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Apuntes from './views/Apuntes.vue'
import Writeups from './views/Writeups.vue'
import Articulos from './views/Articulos.vue'
import Contacto from './views/Contacto.vue'
import SobreMi from './views/SobreMi.vue'
import Proyectos from './views/Proyectos.vue'

// Artículos individuales
import HacktivismoItalia2025 from './articulos/HacktivismoItalia2025.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/apuntes', name: 'Apuntes', component: Apuntes },
  { path: '/writeups', name: 'Writeups', component: Writeups },
  { path: '/articulos', name: 'Articulos', component: Articulos },
  { path: '/articulos/hacktivismo-italia-2025', name: 'HacktivismoItalia2025', component: HacktivismoItalia2025 },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/sobremi', name: 'SobreMi', component: SobreMi },
  { path: '/proyectos', name: 'Proyectos', component: Proyectos },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
