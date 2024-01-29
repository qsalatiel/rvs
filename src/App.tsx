import { RouterProvider } from '@tanstack/react-router'
import { appRouter } from './config/app-router'
import { AppProviders } from './config/app-providers'

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={appRouter} />
    </AppProviders>
  )
}
