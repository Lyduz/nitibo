import Home from "@/views/Home.vue";
import Categories from "@/views/Categories.vue";

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