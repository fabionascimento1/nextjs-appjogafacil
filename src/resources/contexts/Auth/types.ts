export type IUser = {
  email?: string
  password?: string
}

export interface IAuthContext {
  authenticate: (params: IUser) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}