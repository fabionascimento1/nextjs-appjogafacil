import { render, screen } from '@testing-library/react'
import Login from "."

describe('Login', () => {
  test('renders a heading', () => {
    render(<Login />)
  })
})