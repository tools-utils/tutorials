import log4js from 'log4js'

/**
 * compress: true - Gzip files as tutorials.log.1.gz, tutorials.log.2.gz...
 * type: 'messagePassThrough' - Writes logs without date, time and any extra
*/
export default function() {
  log4js.configure({
    appenders: {
      stdout: { type: 'stdout' },
      file: { type: 'file', filename: 'tutorials.log', maxLogSize: 10240, backups: 3
      , keepFileExt: true
      , compress: false},

      datefile: { type: 'dateFile', filename: 'tutorials-date.log', maxLogSize: 10240, backups: 3
      , pattern: 'yyyyMMdd'
      , keepFileExt: true
      , compress: false, layout: { type: 'messagePassThrough' } }
    },
    categories: {
      default: { appenders: [ 'stdout', 'file' ], level: 'debug'}
      , app: { appenders: [ 'datefile' ], level: 'debug'}
    }
  })
}