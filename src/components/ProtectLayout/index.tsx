import { useAuth } from "@/resources/contexts/Auth/useAuth"

export const ProtectedLayout = ({children}: {children : JSX.Element}) => {
    const auth = useAuth()

    if(!auth.authenticate) {
        return <h1>Você esta sem permissão de acesso!</h1>
    }
    
    return children
}