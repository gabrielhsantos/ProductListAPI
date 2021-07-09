import { ClientProductList } from '@domain/repositories/clientsProductsLists/clientsProductsListsRepository'
import { Client } from '@core/domain/entities/clients'
import { AddClientProductListUseCase } from './addClientProductListUseCase'
import { ClientProductListService } from '@services/clientsProductsLists'
import { GetClientProductListUseCase } from './getClientProductListUseCase'
import { GetProviderProductUseCase } from './getProviderProductUseCase'
import { RemoveClientProductListUseCase } from './removeClientProductListUseCase'

const clientsProductsListsRepository = new ClientProductList()

const addClientProductListUseCase = new AddClientProductListUseCase(clientsProductsListsRepository)
const addClientProductList = new ClientProductListService(addClientProductListUseCase)

const clientsRepository = new Client()
const getClientProductListUseCase = new GetClientProductListUseCase(clientsRepository)
const getClientProductList = new ClientProductListService(getClientProductListUseCase)

const findClientUseCase = new GetProviderProductUseCase()
const findClient = new ClientProductListService(findClientUseCase)

const removeClientProductListUseCase = new RemoveClientProductListUseCase(clientsProductsListsRepository)
const removeClientProductList = new ClientProductListService(removeClientProductListUseCase)

export { addClientProductList, getClientProductList, findClient, removeClientProductList }
