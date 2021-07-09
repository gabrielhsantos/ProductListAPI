import { Request, Response, NextFunction } from 'express'
import { addClientProductListService } from '@core/domain/useCases/clientProductList/addClientProductList/_index'
import { getClientProductListService } from '@core/domain/useCases/clientProductList/getClientProductList/_index'
import { removeClientProductListService } from '@core/domain/useCases/clientProductList/removeClientProductList/_index'
import { StatusCodes } from 'http-status-codes'
import { success, clientListResponse } from '@api/mappers/successResponse'

export class ClientProductListController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await addClientProductListService.addProduct({ ...req.body, clientId: req.params.clientId })

      return res.status(StatusCodes.CREATED).send(success('Product added!'))
    } catch (error) {
      next(error)
    }
  }

  async getClientList(req: Request, res: Response, next: NextFunction) {
    try {
      const clientList = await getClientProductListService.getClientList(req.params.clientId)

      const response = success('Products list', clientListResponse(clientList))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async removeProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = { productId: req.params.productId, clientId: req.params.clientId }

      await removeClientProductListService.removeProduct(data)

      return res.status(StatusCodes.CREATED).send(success('Product removed!'))
    } catch (error) {
      next(error)
    }
  }
}
