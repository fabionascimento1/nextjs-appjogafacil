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