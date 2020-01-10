"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * compress: true - Gzip files as tutorials.log.1.gz, tutorials.log.2.gz...
 * type: 'messagePassThrough' - Writes logs without date, time and any extra
*/
function _default() {
  _log4js.default.configure({
    appenders: {
      stdout: {
        type: 'stdout'
      },
      file: {
        type: 'file',
        filename: 'tutorials.log',
        maxLogSize: 10240,
        backups: 3,
        keepFileExt: true,
        compress: false,
        layout: {
          type: 'messagePassThrough'
        }
      },
      datefile: {
        type: 'dateFile',
        filename: 'tutorials-date.log',
        maxLogSize: 10240,
        backups: 3,
        pattern: 'yyyyMMdd',
        keepFileExt: true,
        compress: false,
        layout: {
          type: 'messagePassThrough'
        }
      }
    },
    categories: {
      default: {
        appenders: ['stdout', 'file'],
        level: 'debug'
      },
      app: {
        appenders: ['datefile'],
        level: 'debug'
      }
    }
  });
}