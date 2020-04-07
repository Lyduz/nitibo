import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import chart from './modules/chart';
import social from './modules/social';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    social,
    chart
  },
  strict: true,
});

Vue.prototype.$store = store;

export default store;