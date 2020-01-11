# Introduction

In this tutorial we learn to read a file line-by-line.

# Objectives
- A small routine is implemented to get a list files in a given directory
- Iterate over the files and read each file line-by-line

# Implementation

```js
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
```

# References
- [`readdirSync`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options) reads files/directories and in a directory
- [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path_options) checks if an object is a file
- [`readline`](https://nodejs.org/api/readline.html)
