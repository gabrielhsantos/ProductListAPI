import * as express from 'express'
import * as cors from 'cors'
import * as routesFile from '@api/routes'
import { errorHandler } from '@api/middlewares/errorHandler'
import { json, text, raw, urlencoded } from 'body-parser'
import { Route } from '@api/routes/enums'

const router = express.Router()
Object.keys(routesFile).forEach(key => {
  router.use(`/api/${Route[key]}`, routesFile[key])
})

const app: express.Application = express()
app
  .use(json())
  .use(text())
  .use(raw())
  .use(urlencoded({ extended: true }))
  .use(
    cors({
      origin: '*',
      methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  )
  .use(router)
  .all('*', (req, res, next: express.NextFunction) => {
    next({ errors: `Endpoint not found!` })
  })
  .use(errorHandler)

export { app }
