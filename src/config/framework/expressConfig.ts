import * as express from 'express'
import * as cors from 'cors'
import * as routesFile from '@api/routes'
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

export { app }
