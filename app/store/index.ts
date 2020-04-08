import Vue from 'nativescript-vue'
import Vuex from 'vuex'

import auth from '@/modules/auth/store'
import chart from '@/modules/chart/store'
import social from '@/modules/social/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    social,
    chart,
  },
  strict: true,
})

Vue.prototype.$store = store

export default store
