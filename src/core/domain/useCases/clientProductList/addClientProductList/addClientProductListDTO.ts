export interface IAddClientProductListDTO {
  id: number
  uuid: string
  clientId: number
  externalProductId: string
  title: string
  imageUrl: string
  price: number
  active: boolean
  createdAt: Date
  updateAt?: Date
}
