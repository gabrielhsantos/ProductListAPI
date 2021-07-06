export interface ICreateClientDTO {
  id: number
  uuid: string
  name: string
  mail: string
  active: boolean
  createdAt: Date
  updateAt?: Date
}
