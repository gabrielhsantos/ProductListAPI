import { Request, Response, NextFunction } from 'express'
import { createClientService } from '@core/domain/useCases/client/createClient'
import { findClientService } from '@core/domain/useCases/client/findClient'
import { updateClientService } from '@core/domain/useCases/client/updateClient'
import { removeClientService } from '@core/domain/useCases/client/removeClient'
import { StatusCodes } from 'http-status-codes'
import { clientsResponse, clientResponse, success } from '@api/mappers/successResponse'

export class ClientController {
  async saveClient(req: Request, res: Response, next: NextFunction) {
    try {
      await createClientService.saveClient({ ...req.body })

      return res.status(StatusCodes.CREATED).send(success('Client created!'))
    } catch (error) {
      next(error)
    }
  }

  async clientsList(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await findClientService.clientsList(req.query.email as string)

      const response = success('Clients', clientsResponse(clients))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async findClient(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await findClientService.findClient(req.params.id as string)

      const response = success('Client', clientResponse(client))

      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      next(error)
    }
  }

  async updateClient(req: Request, res: Response, next: NextFunction) {
    try {
      await updateClientService.updateClient(req.params.id as string, { ...req.body })

      return res.status(StatusCodes.OK).send(success('Client updated!'))
    } catch (error) {
      next(error)
    }
  }

  async removeClient(req: Request, res: Response, next: NextFunction) {
    try {
      await removeClientService.removeClient(req.params.id as string)

      return res.status(StatusCodes.OK).send(success('Client removed!'))
    } catch (error) {
      next(error)
    }
  }
}
