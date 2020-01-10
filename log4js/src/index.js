import init from './init'
import log4js from 'log4js'

init()

// default logger
const logger = log4js.getLogger();
const appLogger = log4js.getLogger('app')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let line = 0

const main = async () => {
  // loops for filling logs
  while (true) {
    const text =`I will be logged in tutorials.log ${++line}`
    logger.debug(text)
    appLogger.debug(text)

    await sleep(100)
  }
}

(async() => {
  await main()
})()
