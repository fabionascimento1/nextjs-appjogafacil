export type IUser = {
  email?: string
  password?: string
  mainError?: string
}

export interface IAuthContext extends IUser{
  authenticate: (params: IUser) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}