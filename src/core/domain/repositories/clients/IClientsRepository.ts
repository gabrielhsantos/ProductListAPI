import { Client } from '@core/domain/entities/clients'
import { IClientDTO } from '@core/domain/useCases/client/clientDTO'

export interface IClientsRepository extends IClientDTO {
  saveClient(client: Client): Promise<void>
  findClient(filter: object): Promise<Client | null>
  clientsList(filter?: object): Promise<Client[]>
  updateClient(email: string): Promise<void>
  removeClient(email: string): Promise<void>
}
