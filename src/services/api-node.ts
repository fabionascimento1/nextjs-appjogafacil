import axios from 'axios'

export const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API_NODE
})
