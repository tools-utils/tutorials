"use strict";

var _init = _interopRequireDefault(require("./init"));

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _init.default)(); // default logger

const logger = _log4js.default.getLogger();

const appLogger = _log4js.default.getLogger('app');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let line = 0;

const main =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* () {
    // loops for filling logs
    while (true) {
      const text = `I will be logged in tutorials.log ${++line}`;
      logger.debug(text);
      appLogger.debug(text);
      yield sleep(100);
    }
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator(function* () {
  yield main();
})();