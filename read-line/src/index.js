import fs from 'fs'
import readline from 'readline'

const processFileLineByLine = (fname, handleLine) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fname)
  })

  rl.on('line', handleLine)
  rl.on('close', () => {
  })
}

const handleLine = (line) => {
  console.log(line)
}

// node lib/index.js foo bar
// argv = ['node', 'lib/index.js', 'foo', 'bar']
const main = async () => {
  const dir = process.argv[2]

  // files and directories
  const all = await fs.readdirSync(dir)
  // files only
  const files = all.map(f => `${__dirname}/${f}`).filter(f => fs.statSync(f).isFile())

  files.forEach(f => {
    processFileLineByLine(f, handleLine)
  })
}

(async() => {
  await main()
  console.log('Finish read all files line-by-line...')
})()
