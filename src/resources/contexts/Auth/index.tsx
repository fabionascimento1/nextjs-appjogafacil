import { createContext, useState } from 'react'

type IUser = {
  email: string
  password: string
}

interface IAuthContext {
  authenticate: (params: IUser) => Promise<void>
  logout: () => void
}

interface IAuthProvider {
  children: JSX.Element
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setState] = useState<IUser | null>()

  async function authenticate() {
    
  }
  function logout () {

  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}