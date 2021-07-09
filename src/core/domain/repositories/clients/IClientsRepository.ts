import { Client } from '@core/domain/entities/clients'
import { IClientDTO } from '@core/domain/useCases/client/interfaces/IClientDTO'
import { IRemoveClientInput } from '@core/domain/useCases/client/interfaces/IRemoveClientInput'
import { IUpdateClientInput } from '@core/domain/useCases/client/interfaces/IUpdateClientInput'

export interface IClientsRepository extends IClientDTO {
  saveClient(client: Client): Promise<void>
  findClient(filter: object): Promise<Client | null>
  clientsList(filter?: object): Promise<Client[]>
  updateClient(filter: object, updateClient: IUpdateClientInput): Promise<void>
  removeClient(filter: object, removeClient: IRemoveClientInput): Promise<void>
}
