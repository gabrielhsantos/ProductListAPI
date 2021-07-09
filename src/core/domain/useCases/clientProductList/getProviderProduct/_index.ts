import { GetProviderProductUseCase } from './getProviderProductUseCase'
import { ClientProductListService } from '@services/clientsProductsLists'

const findClientUseCase = new GetProviderProductUseCase()
const findClientService = new ClientProductListService(findClientUseCase)

export { findClientService }
