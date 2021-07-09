import { Client } from '@core/domain/entities/clients'
import { IClientProductListDTO } from '@core/domain/useCases/clientProductList/_interfaces/IClientProductListDTO'

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

const clientListResponse = (client: Client) => {
  return {
    id: client.uuid,
    name: client.name,
    email: client.email,
    productsList: productListResponse(client.clientProductLists),
  }
}

const productListResponse = (products?: IClientProductListDTO[]) => {
  if (products?.length) {
    return products.map(product => {
      return {
        id: product.uuid,
        externalId: product.externalProductId,
        title: product.title,
        brand: product.brand,
        image: product.imageUrl,
        price: product.price,
      }
    })
  }

  return []
}

export { success, clientsResponse, clientResponse, clientListResponse }
