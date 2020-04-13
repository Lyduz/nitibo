import Vue from 'nativescript-vue'
import { VNode } from 'vue/types/umd'
import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// global dependency
import routes from './router'
import store from './store'

// main files
import App from './App.vue'
import './styles.scss'
import Navigator from 'nativescript-vue-navigator'

// register global components
Vue.use(Navigator, { routes })

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'
Vue.config.devtools = TNS_ENV === 'development'

new Vue({
  store,
  render: (h): VNode => h(App),
}).$start()
