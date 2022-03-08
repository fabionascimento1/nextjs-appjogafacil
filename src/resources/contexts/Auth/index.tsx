import { createContext, useState } from 'react'
import {IUser, IAuthContext, IAuthProvider} from './types'
import { LoginRequest } from './utils'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setUser] = useState<IUser | null>()

  async function authenticate(params: IUser) {
    const response = LoginRequest(params)
    const { email } = params
    const payload = {token: response.token, email}
    setUser(payload)
  }
  function logout () {

  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}