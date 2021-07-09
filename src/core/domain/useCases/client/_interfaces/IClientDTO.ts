import { IClientProductListDTO } from '../../clientProductList/_interfaces/IClientProductListDTO'

export interface IClientDTO {
  id: number
  uuid: string
  name: string
  email: string
  active: boolean
  createdAt: Date
  updateAt?: Date
  clientProductLists?: IClientProductListDTO[]
}
