import Vue from 'nativescript-vue'
import { VNode } from 'vue/types/umd'

// global dependency
import routes from './router'
import store from './store'

// main files
import App from './App.vue'
import './styles.scss'
import Navigator from 'nativescript-vue-navigator'
// FIXME: run vue dev tools and enable
//import VueDevtools from 'nativescript-vue-devtools'

// register global components
Vue.use(Navigator, { routes })

if (TNS_ENV !== 'production') {
  //FIXME: resolve VueDevTools issue
  // Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  store,
  render: (h): VNode => h(App),
}).$start()
