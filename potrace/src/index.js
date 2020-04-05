import potrace from 'potrace'
import fs from 'fs'

const fname = process.argv[2]

const primary = '#790000'
const secondary = '#ce1720'

const params = {
  color: secondary
}

potrace.trace(fname, function(err, svg) {
  if (err) throw err
  fs.writeFileSync(`${fname}.svg`, svg)
})