import fs from 'fs-extra'

const move = (source, target) => {
  console.log(`Start moving ${source} to ${target}`)
  try {
    fs.moveSync(source, target, { override: true })
  } catch(e) {
    fs.copySync(source, target, { overwrite: true })
    fs.truncateSync(source)
  }
}

const targetFileName = (source, basedir) => {
  const stat = fs.statSync(source)
  // created time millis secs
  const date = new Date(stat.ctimeMs)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const padZero = Math.round(month / 10) == 0 ? '0' : ''
  const year = date.getFullYear()
  const dir = `${year}-${padZero}${month}-${day}`

  // 2020-01-11/access.log
  const target = `${basedir}/${dir}/${source}`
  return target
}

const moveToDir = (source, basedir) => {
  const target = targetFileName(source, basedir)
  move(source, target)
}

const fname = process.argv[2]
const toDir = process.argv[3]

moveToDir(fname, toDir)