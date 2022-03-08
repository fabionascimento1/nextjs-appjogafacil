import { useAuth } from "@/resources/contexts/Auth/useAuth"

export const ProtectedLayout = ({children}: {children : JSX.Element}) => {
    const auth = useAuth()

    if(!auth.email) {
        return <h1>Você está sem permissão de acesso!</h1>
    }
    
    return children
}