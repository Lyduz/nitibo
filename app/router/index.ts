import Home from "@/views/Home.vue";
import { socialRoutes } from "./social.router";
import { chartRoutes } from "./chart.router";

const baseRoutes = {
    '/home': {
      component: Home,
      meta: {
        title: "Home"
      }
    }
};

const allRountes = Object.assign(baseRoutes, socialRoutes, chartRoutes);

export const routes = allRountes;