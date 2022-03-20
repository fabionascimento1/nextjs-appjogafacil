import React from "react"

export interface IState {
  isLoding?: boolean,
  email?: string,
  password?: string,
  emailError?: boolean,
  passwordError?: boolean,
  mainError?: string
}

export type IFormTypes = {
  state: IState,
  setState: React.Dispatch<React.SetStateAction<IState>>
}

