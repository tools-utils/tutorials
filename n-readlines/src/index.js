import LineByLine from 'n-readlines'

const fname = process.argv[2]
const reader = new LineByLine(fname)

let line = ''

while (line = reader.next()) {
  console.log(line.toString('utf8'))
}