import { ParsedLocation, redirect } from '@tanstack/react-router'

type GuardParams = {
  location: ParsedLocation
}

export const requireAuthGuard = async ({ location }: GuardParams) => {
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
