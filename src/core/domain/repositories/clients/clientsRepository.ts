import { ClientProductList } from '@core/domain/repositories/clientsProductsLists/clientsProductsListsRepository'
import { IRemoveClientInput, IUpdateClientInput } from '@core/domain/useCases/client/_interfaces/IClientInputs'
import { IClientProductListDTO } from '@core/domain/useCases/clientProductList/_interfaces/IClientProductListDTO'
import { Model } from 'sequelize'
import { IClientsRepository } from './IClientsRepository'

export class Client extends Model implements IClientsRepository {
  public id: number
  public uuid: string
  public name: string
  public email: string
  public active: boolean
  public createdAt: Date
  public updateAt?: Date
  public clientProductLists?: IClientProductListDTO[]

  async saveClient(client: Client): Promise<void> {
    Client.create(client.toJSON())
  }

  async clientsList(filter?: object): Promise<Client[]> {
    return Client.findAll({ where: filter })
  }

  async findClient(filter: object): Promise<Client | null> {
    return Client.findOne({ where: filter })
  }

  async findClientList(filter: object): Promise<Client | null> {
    return Client.findOne({
      include: [{ model: ClientProductList, required: false, where: { active: true } }],
      where: filter,
    })
  }

  async updateClient(filter: object, updateClient: IUpdateClientInput): Promise<void> {
    Client.update(updateClient, { where: filter })
  }

  async removeClient(filter: object, removeClient: IRemoveClientInput): Promise<void> {
    Client.update(removeClient, { where: filter })
  }
}
