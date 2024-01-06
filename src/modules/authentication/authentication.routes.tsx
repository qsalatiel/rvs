import { Route, Outlet } from '@tanstack/react-router'

import { rootRoute } from '@/router/root-route'

export const authenticationRoutes = new Route({
  getParentRoute: () => rootRoute,
  path: 'auth',
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

export * from './routes/create-account'
export * from './routes/sign-in'
