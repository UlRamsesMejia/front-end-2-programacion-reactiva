import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Inicio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  // {
  //   path: '/nosotros',
  //   name: 'Nosotros',
  //   component: () => import('../views/Nosotros.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
