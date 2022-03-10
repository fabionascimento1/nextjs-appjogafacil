import { Api } from '@/services/api-node'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import {IUser, IAuthContext, IAuthProvider} from './types'
import { getUserLocalStore, LoginRequest, setUserLocalStorage } from './utils'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setUser] = useState<IUser | null>()
  const [mainError, setMainError] = useState()

  useEffect(() => {
        const user = getUserLocalStore()
        if(user) {
          setUser(user)
        }
    }, [])

  async function authenticate(params: IUser) {
    const request = await Api.post('signin', (params))
      .then((response) => {
       const { email } = params
      const payload = {token: response.data.token, email}
      setUser(payload)
      setUserLocalStorage(payload)
    
      })
      .catch((error) => { 
        setMainError(error.response.data["error"])
      })
  }
  function logout () {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, mainError, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}