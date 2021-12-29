import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cadastro from '../views/Cadastro.vue'
import Aluno from '../views/Aluno.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
      children:[
        {
          path: 'aluno',
          name: 'Aluno',
          component: Aluno
        }
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
