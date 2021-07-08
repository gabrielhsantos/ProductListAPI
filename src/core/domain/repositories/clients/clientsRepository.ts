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

  async saveClient(client: Client): Promise<void> {
    Client.create(client.toJSON())
  }

  async clientsList(filter?: object): Promise<Client[]> {
    return Client.findAll({ where: filter })
  }

  async findClient(filter: object): Promise<Client | null> {
    return Client.findOne({ where: filter })
  }

  async updateClient(email: string): Promise<void> {}

  async removeClient(email: string): Promise<void> {}
}
