import { RouterProvider } from '@tanstack/react-router'
import { appRouter } from './config/app-router'

export default function App() {
  return <RouterProvider router={appRouter} />
}
