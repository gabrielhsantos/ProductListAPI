import * as Joi from 'joi'
import { SchemaValidator } from '@api/middlewares/validateSchema'

export const createClient: SchemaValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
}

export const updateClient: SchemaValidator = {
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
  }),
}
