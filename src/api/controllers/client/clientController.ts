import * as Service from '@core/domain/useCases/client/_index'
import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import { clientsResponse, clientResponse, success } from '@api/mappers/successResponse'

export class ClientController {
  async saveClient(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.createClient.saveClient({ ...req.body })

      return res.status(StatusCodes.CREATED).send(success('Client created!'))
    } catch (error) {
      next(error)
    }
  }

  async clientsList(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await Service.findClient.clientsList(req.query.email as string)

      const response = success('Clients', clientsResponse(clients))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async findClient(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await Service.findClient.findClient(req.params.clientId as string)

      const response = success('Client', clientResponse(client))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async updateClient(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.updateClient.updateClient(req.params.clientId as string, { ...req.body })

      return res.status(StatusCodes.OK).send(success('Client updated!'))
    } catch (error) {
      next(error)
    }
  }

  async removeClient(req: Request, res: Response, next: NextFunction) {
    try {
      await Service.removeClient.removeClient(req.params.clientId as string)

      return res.status(StatusCodes.OK).send(success('Client removed!'))
    } catch (error) {
      next(error)
    }
  }
}
