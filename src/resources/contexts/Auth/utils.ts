import { Api } from "@/services/api-node"
import { IUser } from "./types"

export async function LoginRequest({email, password} : IUser) {
  try {
        const request = await Api.post('signin', {email, password})
        return request.data
        
    } catch (error) {
        return null
    }
}

export function setUserLocalStorage (user : IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStore() {
    const json = localStorage.getItem('u')

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null
}