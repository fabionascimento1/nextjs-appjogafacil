import { render, screen, cleanup, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginComponent from "@/pages/login"

type SutTypes = {
  view: RenderResult
}
const makeSut = (): SutTypes => {
    const view = render(<LoginComponent />)
    return {
      view
    }
}

describe('Login', () => {
  afterEach(cleanup)

  test('render email input', () => {
    const { view } = makeSut()  
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  test('Should start render with initial state', () => {
     const { view } = makeSut()  
    const submitButton = screen.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  });
})