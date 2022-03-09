import { useAuth } from "@/resources/contexts/Auth/useAuth"
import { getUserLocalStore } from "@/resources/contexts/Auth/utils"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import HeadMetaContent from "@/components/public/head-meta-content"
import PublicTemplate from "@/components/public/public-template"
import styles from '@/styles/Global.module.scss'
import LoginStyles from './Login.module.scss'

export default function Login() {
  const auth = useAuth()
  const router = useRouter()

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const user = getUserLocalStore()
        
    if(user) {
      router.push('./dashboard')
    } 
  })
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      await auth.authenticate({
        email: state.email, 
        password: state.password
      })
      router.push('./dashboard')
    } catch (error) {
     alert(error)
    }
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  return (
    <PublicTemplate>
      <HeadMetaContent title="Página de login" meta="Página de login App Joga Fácil" />
      <div className={styles.container}>
        <div className={LoginStyles.login}>
          <form onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>
            <input type='email' name='email' placeholder='Digite seu email' onChange={handleChange} />
            <input type='password' name='password' placeholder='Digite sua senha' onChange={handleChange} />
            <button type='submit'>Fazer Login</button>
          </form>
        </div>
      </div>
    </PublicTemplate>
  )
}