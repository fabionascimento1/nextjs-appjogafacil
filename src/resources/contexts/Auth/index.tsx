import { Api } from '@/services/api-node'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import {IUser, IAuthContext, IAuthProvider} from './types'
import { getUserLocalStore, setUserLocalStorage } from './utils'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider ) => {
  const [user, setUser] = useState<IUser | null>()
  const [mainError, setMainError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const user = getUserLocalStore()
    if(user) {
      setUser(user)
    }
  }, [])

  async function authenticate(params: IUser) {
    const request = await Api.post('signin', (params))
      .then((response) => {
        setMainError('')
        const { email } = params
        const payload = {token: response.data.token, email}
        setUser(payload)
        setUserLocalStorage(payload)
        router.push('/dashboard')
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