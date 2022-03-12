import { render, screen } from '@testing-library/react'
import Login from "@/pages/login"

describe('Login', () => {
  test('render email input', () => {
    render(<Login />);
 
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
})