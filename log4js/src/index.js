import log4js from 'log4js'

/**
 * compress: true - Gzip files as tutorials.log.1.gz, tutorials.log.2.gz...
 * type: 'messagePassThrough' - Writes logs without date, time and any extra
*/
log4js.configure({
  appenders: {
    stdout: { type: 'stdout' },
    file: { type: 'file', filename: 'tutorials.log', maxLogSize: 10240, backups: 3
    , compress: false, layout: { type: 'messagePassThrough' } }
  },
  categories: {
    default: { appenders: [ 'stdout', 'file' ], level: 'debug'}
  }
});

const logger = log4js.getLogger();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let line = 0

const main = async () => {
  // loops for filling logs
  while (true) {
    logger.debug(`I will be logged in tutorials.log ${++line}`)
    await sleep(100)
  }
}

(async() => {
  await main()
})()
