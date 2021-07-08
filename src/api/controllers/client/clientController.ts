import { Request, Response, NextFunction } from 'express'
import { clientService } from '@core/domain/useCases/client/createClient'
import { StatusCodes } from 'http-status-codes'
import { clientsResponse, clientResponse, success } from '@api/mappers/successResponse'

export class ClientController {
  async saveClient(req: Request, res: Response, next: NextFunction) {
    try {
      await clientService.saveClient({ ...req.body })

      return res.status(StatusCodes.CREATED).send(success('Client created!'))
    } catch (error) {
      next(error)
    }
  }

  async clientsList(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await clientService.clientsList(req.query.email as string)

      const response = success('Clients', clientsResponse(clients))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async findClient(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await clientService.findClient(req.params.id as string)

      const response = success('Client', clientResponse(client))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async updateClient(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await clientService.findClient(req.params.id as string)

      const response = success('Client', clientResponse(client))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }
}
