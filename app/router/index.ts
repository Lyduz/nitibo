import { Home } from "@/modules";
import { socialRoutes } from "@/modules/social/router";
import { chartRoutes } from "@/modules/chart/router";

const baseRoutes = {
  "/home": {
    component: Home,
    meta: {
      title: "Home",
    },
  },
};

const allRountes = Object.assign(baseRoutes, socialRoutes, chartRoutes);

export const routes = allRountes;
