import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Proyectos from './views/Proyectos.vue'
import Apuntes from './views/Apuntes.vue'
import Writeups from './views/Writeups.vue'
import Articulos from './views/Articulos.vue'
import Contacto from './views/Contacto.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/proyectos', component: Proyectos },
  { path: '/apuntes', component: Apuntes },
  { path: '/writeups', component: Writeups },
  { path: '/articulos', component: Articulos },
  { path: '/contacto', component: Contacto }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
