import { Api } from '@/services/api-node'
import { createContext, useState } from 'react'

type IUser = {
  email?: string
  password?: string
}

interface IAuthContext {
  authenticate: (params: IUser) => Promise<void>
  logout: () => void
}

interface IAuthProvider {
  children: JSX.Element
}

async function LoginRequest({email, password} : IUser) {
  try {
        const request = await Api.post('signin', {email, password})
        return request.data
        
    } catch (error) {
        return null
    }
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setState] = useState<IUser | null>()

  async function authenticate(params: IUser) {
    const response = LoginRequest(params)
    
  }
  function logout () {

  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}