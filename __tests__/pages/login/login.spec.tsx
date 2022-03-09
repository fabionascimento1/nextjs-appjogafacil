import { render, screen } from '@testing-library/react'
import Login from "@/pages/login"

describe('Login', () => {
  test('renders a heading', () => {
    render(<Login />)
  })
})