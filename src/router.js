import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Apuntes from './views/Apuntes.vue'
import Writeups from './views/Writeups.vue'
import Articulos from './views/Articulos.vue'
import Contacto from './views/Contacto.vue'
import SobreMi from './views/SobreMi.vue'
import Proyectos from './views/Proyectos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/apuntes', component: Apuntes },
  { path: '/writeups', component: Writeups },
  { path: '/articulos', component: Articulos },
  { path: '/contacto', component: Contacto },
  { path: '/sobremi', component: SobreMi },
  { path: '/proyectos', component: Proyectos }
]

export default createRouter({
  history: createWebHistory(),
  routes
})