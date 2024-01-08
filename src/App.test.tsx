import { render, screen } from '@/tests/utils'

import App from './App'

describe('App', () => {
  it('renders sign in page when not authenticated', async () => {
    render(<App />)

    await vi.waitFor(() => expect(screen.getAllByText('Sign In')).toBeTruthy())
  })
})
