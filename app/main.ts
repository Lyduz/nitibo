import Vue from "nativescript-vue";
import VueDevtools from "nativescript-vue-devtools";
import Navigator from "nativescript-vue-navigator";

import { routes } from "./router";
import store from "./store";

import App from "./App.vue";
import "./styles.scss";

Vue.use(Navigator, { routes });

if (TNS_ENV !== "production") {
  //Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

new Vue({
  store,
  render: h => h(App)
}).$start();
