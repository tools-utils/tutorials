import { createWorker } from 'tesseract.js'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.load()
  // https://github.com/tesseract-ocr/tesseract/wiki/Data-Files#data-files-for-version-400-november-29-2016
  // eng + deu  
  await worker.loadLanguage('eng')
  await worker.initialize('eng')
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png')
  console.log(text)
  await worker.terminate()
})()
