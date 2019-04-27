import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../components/Home.vue'
import Categories from '../components/Categories.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/categories',
      component: Categories,
      meta: {
        title: 'Categories',
      },
    },

    //default
    { path: '*', redirect: '/home' },
  ],
});

router.replace('/home');

export default router;
