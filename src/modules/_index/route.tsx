import { Route } from '@tanstack/react-router'

import { rootRoute } from '@/router/root-route'
import { requireAuthGuard, executeGuards } from '@/utils/routing'

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: async (...opts) => await executeGuards(requireAuthGuard)(...opts),
  component: () => (
    <>
      <h1>index</h1>
    </>
  ),
})
