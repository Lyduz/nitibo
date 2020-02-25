import Vue from 'nativescript-vue';
import Vuex from 'vuex';

//import vuex modules
import json_helper from './modules/json_helper'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    json_helper
  },
  strict: true,
});

Vue.prototype.$store = store;

export default store;