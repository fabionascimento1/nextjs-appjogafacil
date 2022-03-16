/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@/resources/contexts/Auth/useAuth"
import { getUserLocalStore } from "@/resources/contexts/Auth/utils"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import HeadMetaContent from "@/components/public/head-meta-content"
import PublicTemplate from "@/components/public/public-template"
import styles from '@/styles/Global.module.scss'
import stylesLogin from './Login.module.scss'
import Input from "@/components/input/input"

export default function Login() {
  const auth = useAuth()
  const { state } = useAuth()
  const router = useRouter()
  const [showElement,setShowElement] = useState(true)
   const [errorState, setErrorState] = useState({
    emailError: true,
    passwordError: '',
  })
  
  function validate (email: string) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegex.test(email) ? false : true
  }

  useEffect(() => {
    setTimeout(function() { setShowElement(false)}, 0);
    const user = getUserLocalStore()     
    if(user) {
      router.push('./dashboard')
    } 
  },[])

  useEffect(() => {
      setErrorState({
        ...errorState,
        emailError: validate(state['email'])
      })
  }, [state['email']])
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    
    event.preventDefault()

    await auth.authenticate({
      email: state['email'], 
      password: state['password']
    })
    setShowElement(true)
  }

  
  return (
    <PublicTemplate>
      <HeadMetaContent title="Página de login" meta="Página de login App Joga Fácil" />
      <div className={styles.container}>
        <div className={stylesLogin.login}>
          <form onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>
            <Input data-testid='email-input' type='email' name='email' placeholder='Digite seu email'  />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <button data-testid='submit' disabled={errorState.emailError} type='submit'>Fazer Login</button> 
             
            { 
              showElement && auth.mainError && 
                <div className={stylesLogin.errorStatus}>
                  <span>{auth.mainError}</span>
                </div> 
            }
             
          </form>
         
        </div>
      </div>
    </PublicTemplate>
  )
}