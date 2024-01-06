import { Route } from '@tanstack/react-router'

import { rootRoute } from '@/router/root-route'
import { requireAuthGuard } from '@/router/require-auth-guard'

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: requireAuthGuard,
  component: () => (
    <>
      <h1>index</h1>
    </>
  ),
})
