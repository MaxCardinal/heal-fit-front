import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stat from '../components/stat.vue'
import Profil from '../components/profil.vue'
import Select from '../components/selectProfil.vue'
import Login from '../components/connexion.vue'
import Calendar from '../components/calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stat',
    name: 'stat',
    component: Stat,
  },
  {
    path: '/profil/:id',
    name: 'profil',
    component: Profil,
  },
  {
    path: '/select',
    name: 'select',
    component: Select,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  }
] 

const router = new VueRouter({
  routes
})

export default router
