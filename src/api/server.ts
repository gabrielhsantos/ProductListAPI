import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})
import { Container } from 'typedi'
import { app, env, logger, databaseConnection } from '@config/_index'

const connect = async () => {
  await Container.get(databaseConnection)
    .connectDatabase()
    .catch(e => {
      logger.error('Error on connect to database-', { e })
      process.exit(1)
    })
}

process.on('unhandledRejection', err => {
  console.error('unhandledRejection', err)
})

process.on('uncaughtException', err => {
  console.error('uncaughtException', err)
})

process.on('exit', err => {
  console.warn('exit', err)
})

connect()
  .then(() => {
    app.listen(env.api.port)
    logger.info(`${env.api.name} running on port ${env.api.port}...`)
  })
  .catch(e => {
    logger.error('Fail to start service...', e)
  })
