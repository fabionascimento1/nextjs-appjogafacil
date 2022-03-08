import { createContext, useEffect, useState } from 'react'
import {IUser, IAuthContext, IAuthProvider} from './types'
import { getUserLocalStore, LoginRequest, setUserLocalStorage } from './utils'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
        const user = getUserLocalStore()
        
        if(user) {
            setUser(user)    
        }
    },[])

  async function authenticate(params: IUser) {
    const response = await LoginRequest(params)
    const { email } = params
    if(response.token) {
      const payload = {token: response.token, email}
      setUser(payload)
      setUserLocalStorage(payload)
    }
  }
  function logout () {

  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}