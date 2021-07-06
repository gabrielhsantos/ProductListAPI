import * as winston from 'winston'

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    data: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    error: 'red',
    warn: 'orange',
    data: 'white',
    info: 'green',
    debug: 'yellow',
  },
}

const printer = (): winston.Logform.Format => {
  return winston.format.json()
}

const formats = [winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' })]

const format = winston.format.combine(...formats, printer())

const transports = [new winston.transports.Console()]

const logger = winston.createLogger({
  level: 'debug',
  levels: myCustomLevels.levels,
  format,
  transports,
})

export { logger }
