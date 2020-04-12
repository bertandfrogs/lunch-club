import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carson from '../views/Carson.vue'
import Charlie from '../views/Charlie.vue'
import Ted from '../views/Ted.vue'
import Noah from '../views/Noah.vue'
import Schlatt from '../views/Schlatt.vue'
import Travis from '../views/Travis.vue'
import Cooper from '../views/Cooper.vue'
import About from '../views/About.vue'

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
    path: '/Carson',
    component: Carson,
    props: true
  },
  {
    path: '/Charlie',
    component: Charlie,
    props: true
  },
  {
    path: '/Cooper',
    component: Cooper,
    props: true
  },
  {
    path: '/Noah',
    component: Noah,
    props: true
  },
  {
    path: '/Ted',
    component: Ted,
    props: true
  },
  {
    path: '/Travis',
    component: Travis,
    props: true
  },
  {
    path: '/Schlatt',
    component: Schlatt,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
