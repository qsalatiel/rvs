import { Router } from '@tanstack/react-router'

import { routeTree } from '@/router/route-tree'

// Set up a Router instance
export const appRouter = new Router({
  routeTree: routeTree,
  defaultPreload: 'intent',
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter
  }
}
