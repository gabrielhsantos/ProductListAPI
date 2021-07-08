import { Client } from '@core/domain/entities/clients'

const success = (message: string, data?: any) => ({ message, data })

const clientsResponse = (clients: Client[]) => {
  return clients.map(client => clientResponse(client))
}

const clientResponse = (client: Client) => {
  return {
    id: client.uuid,
    name: client.name,
    email: client.email,
  }
}

export { success, clientsResponse, clientResponse }
