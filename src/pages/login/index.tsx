/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuth } from "@/resources/contexts/Auth/useAuth"
import Context from "@/resources/contexts/form/form-contexts"
import { getUserLocalStore } from "@/resources/contexts/Auth/utils"
import HeadMetaContent from "@/components/public/head-meta-content"
import Input from "@/components/input/input"
import PublicTemplate from "@/components/public/public-template"
import styles from '@/styles/Global.module.scss'
import stylesLogin from './Login.module.scss'

export default function Login() {
  const auth = useAuth()
  const router = useRouter()
  const [showElement,setShowElement] = useState(true)
  
  const [state, setState] = useState({
    isLoding: false,
    email: '',
    password: '',
    emailError: true,
    passwordError: true,
    mainError: ''
  })
  
  function validateEmail (email: string) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegex.test(email) ? false : true
  }

  function validateMinLength(password: string){
    return password.length >= 5 ? false : true
  }

  useEffect(() => {
    setTimeout(function() { setShowElement(false)}, 0);
    const user = getUserLocalStore()     
    if(user) {
      router.push('./dashboard')
    } 
  },[])

  useEffect(() => {
      setState({
        ...state,
        emailError: validateEmail(state['email']),
        passwordError: validateMinLength(state['password'])
      })
  }, [state.email, state.password])
  
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
          <Context.Provider value={{ state, setState }}>
          <form onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>
            <Input data-testid='email-input' type='email' name='email' placeholder='Digite seu email'  />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <button data-testid='submit' disabled={state.emailError || state.passwordError} type='submit'>Fazer Login</button> 
            { 
              showElement && auth.mainError && 
                <div className={stylesLogin.errorStatus}>
                  <span>{auth.mainError}</span>
                </div> 
            }
          </form>
         </Context.Provider>
        </div>
      </div>
    </PublicTemplate>
  )
}