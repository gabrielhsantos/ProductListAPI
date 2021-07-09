export interface ICreateClientInput {
  name: string
  email: string
}

export interface IRemoveClientInput {
  active: boolean
  updatedAt: Date
}

export interface IUpdateClientInput {
  name?: string
  email?: string
  updatedAt: Date
}
