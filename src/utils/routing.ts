import { BaseRouteOptions, redirect } from '@tanstack/react-router'

export type RouteGuardFn = NonNullable<BaseRouteOptions['beforeLoad']>

export function executeGuards(...args: RouteGuardFn[]) {
  const exec = async (...opts: Parameters<RouteGuardFn>) => {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'function') {
        await args[i]?.(...opts)
      }
    }
  }
  return exec
}

export const requireAuthGuard: RouteGuardFn = async ({ location }) => {
  const isAuthenticated = localStorage.getItem('auth')

  if (!isAuthenticated) {
    throw redirect({
      to: '/auth/sign-in',
      search: {
        redirect: location.href,
      },
    })
  }
}
