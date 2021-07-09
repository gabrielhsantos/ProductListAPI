import { Client } from '@core/domain/entities/clients'
import { GetClientProductListUseCase } from './getClientProductListUseCase'
import { ClientProductListService } from '@services/clientsProductsLists'

const clientsProductsListsRepository = new Client()
const getClientProductListUseCase = new GetClientProductListUseCase(clientsProductsListsRepository)
const getClientProductListService = new ClientProductListService(getClientProductListUseCase)

export { getClientProductListService }
