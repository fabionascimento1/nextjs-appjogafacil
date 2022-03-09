import { ProtectedLayout } from "@/components/ProtectLayout"
import { getUserLocalStore } from "@/resources/contexts/Auth/utils"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Dashboard ()  {
    const router = useRouter()
    
    useEffect(() => {
        const user = getUserLocalStore()

        if(!user) {
            router.push('./login')
        } 
    })
    return(
        <ProtectedLayout>
            <h1>Profile Access </h1>
        </ProtectedLayout>
        
    )
}