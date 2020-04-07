import { homeRoutes } from '@/modules/home/routes'
import { socialRoutes } from '@/modules/social/routes'
import { chartRoutes } from '@/modules/chart/routes'

const routes = Object.assign(homeRoutes, socialRoutes, chartRoutes)

export default routes
