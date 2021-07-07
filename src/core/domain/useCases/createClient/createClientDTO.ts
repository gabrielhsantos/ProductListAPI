export interface ICreateClientDTO {
  id: number
  uuid: string
  name: string
  email: string
  active: boolean
  createdAt: Date
  updateAt?: Date
}
