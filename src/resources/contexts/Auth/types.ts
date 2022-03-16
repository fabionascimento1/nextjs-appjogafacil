export type IUser = {
  email?: string
  password?: string
  mainError?: string
  state?: any 
  setState?: any 
}

export interface IAuthContext extends IUser{
  authenticate: (params: IUser) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}