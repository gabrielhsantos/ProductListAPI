export interface IClientProductListDTO {
  id: number
  uuid: string
  clientId: number
  externalProductId: string
  title: string
  brand: string
  imageUrl: string
  price: number
  active: boolean
  createdAt: Date
  updateAt?: Date
}
