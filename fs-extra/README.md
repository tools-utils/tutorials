# Introduction
[fs-extra](https://github.com/jprichardson/node-fs-extra) offers extra handy methods for handling file system in `Node`.
We use `fs-extra` to build an archiving method with this project.

# Objectives
- Implement an archiving method that moves a file to a destination
- Use `yyyy-MM-dd` pattern for creating archving directory

# Implementation

```js
const move = (source, target) => {
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
```

# References
- [fs-extra](https://github.com/jprichardson/node-fs-extra)