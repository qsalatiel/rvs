import { rootRoute } from '@/router/root-route'
import { indexRoute } from '@/modules/_index/route'

import { authenticationRoutes, createAccountRoute, signInRoute } from '@/modules/authentication/authentication.routes'

export const routeTree = rootRoute.addChildren([
  indexRoute,
  authenticationRoutes.addChildren([signInRoute, createAccountRoute]),
])
