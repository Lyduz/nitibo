import { HomeRoutes } from '@/modules/home/routes'
import { SocialRoutes } from '@/modules/social/routes'
import { ChartRoutes } from '@/modules/chart/routes'

const routes = Object.assign(HomeRoutes, SocialRoutes, ChartRoutes)

export default routes
