import Home from "@/views/Home.vue";
import { socialRoutes } from "./social.routes";
import { chartRoutes } from "./chart.routes";

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