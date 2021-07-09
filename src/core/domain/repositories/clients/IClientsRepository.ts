import { Client } from '@core/domain/entities/clients'
import { IClientDTO } from '@core/domain/useCases/client/_interfaces/IClientDTO'
import { IRemoveClientInput, IUpdateClientInput } from '@core/domain/useCases/client/_interfaces/IClientInputs'

export interface IClientsRepository extends IClientDTO {
  saveClient(client: Client): Promise<void>
  findClient(filter: object): Promise<Client | null>
  findClientList(filter: object): Promise<Client | null>
  clientsList(filter?: object): Promise<Client[]>
  updateClient(filter: object, updateClient: IUpdateClientInput): Promise<void>
  removeClient(filter: object, removeClient: IRemoveClientInput): Promise<void>
}
