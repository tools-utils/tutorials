import LineByLine from 'n-readlines'

const fname = process.argv[2]
const reader = new LineByLine(fname)

let buf

while (buf = reader.next()) {
  console.log(buf.toString('utf8'))
}