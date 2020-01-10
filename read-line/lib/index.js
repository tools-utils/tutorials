"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _readline = _interopRequireDefault(require("readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const processFileLineByLine = (fname, handleLine) => {
  const rl = _readline.default.createInterface({
    input: _fs.default.createReadStream(fname)
  });

  rl.on('line', handleLine);
  rl.on('close', () => {});
};

const handleLine = line => {
  console.log(line);
}; // node lib/index.js foo bar
// argv = ['node', 'lib/index.js', 'foo', 'bar']


const main =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* () {
    const dir = process.argv[2]; // files and directories

    const all = yield _fs.default.readdirSync(dir); // files only

    const files = all.filter(f => _fs.default.statSync(f).isFile());
    files.forEach(f => {
      processFileLineByLine(f, handleLine);
    });
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator(function* () {
  yield main();
  console.log('Finish read all files line-by-line...');
})();