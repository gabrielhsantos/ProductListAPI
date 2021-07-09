import * as Service from '@core/domain/useCases/clientProductList/_index'
import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import { success, clientListResponse } from '@api/mappers/successResponse'

export class ClientProductListController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.addClientProductList.addProduct({ ...req.body, clientId: req.params.clientId })

      return res.status(StatusCodes.CREATED).send(success('Product added!'))
    } catch (error) {
      next(error)
    }
  }

  async getClientList(req: Request, res: Response, next: NextFunction) {
    try {
      const clientList = await Service.getClientProductList.getClientList(req.params.clientId)

      const response = success('Products list', clientListResponse(clientList))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async removeProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = { productId: req.params.productId, clientId: req.params.clientId }

      await Service.removeClientProductList.removeProduct(data)

      return res.status(StatusCodes.CREATED).send(success('Product removed!'))
    } catch (error) {
      next(error)
    }
  }
}
