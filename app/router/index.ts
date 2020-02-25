import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";

export const routes = {
  '/home': {
    component: Home,
    meta: {
      title: "Home"
    }
  },
  '/categories': {
    component: Categories,
    meta: {
      title: "Categories"
    }
  },
}