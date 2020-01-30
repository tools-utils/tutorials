const argv = require('yargs').argv
import fs from 'fs'
import path from 'path'
import papa from 'papaparse'
import mustache from 'mustache'
import PdfPrinter from 'pdfmake'

// template and csv files
const { template, csv } = argv

const read = (fname) => {
  const buf = fs.readFileSync(path.resolve(__dirname, fname))
  const content = buf.toString('utf8')
  return content  
}

const generatePdfDoc = (dd, fname) => {
  const fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italics: 'fonts/Roboto-Italic.ttf',
      bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
  }

  const printer = new PdfPrinter(fonts)
  const pdfDoc = printer.createPdfKitDocument(dd)
  pdfDoc.pipe(fs.createWriteStream(path.resolve(__dirname, fname)))
  pdfDoc.end()
}

const templateContent = read(template)
const csvContent = read(csv)
const csvJson = papa.parse(csvContent, { header: true, skipEmptyLines: true })

const len = csvJson.data.length

for (let idx = 0; idx < len; idx++) {
  let item = csvJson.data[idx]
  
  const pdfdesc = mustache.render(templateContent, item)
  const dd = JSON.parse(pdfdesc)

  console.log(dd)
  generatePdfDoc(dd, `${idx}.pdf`)
}

