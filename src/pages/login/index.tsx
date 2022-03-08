import { useAuth } from "@/resources/contexts/Auth/useAuth"
import { useState } from "react"

export default function Login() {
  const auth = useAuth()

  const [state, setState] = useState({
    email: '',
    password: ''
  })
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      await auth.authenticate({
        email: state.email, 
        password: state.password
      })
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
    <>
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type='email' name='email' placeholder='Digite seu email' onChange={handleChange} />
        <input type='password' name='password' placeholder='Digite sua senha' onChange={handleChange} />
        <button type='submit'>Entrar</button>
      </form>
    </>
  )
}