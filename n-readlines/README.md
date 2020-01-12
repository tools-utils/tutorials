# Introduction

The implementation of [n-readlines](https://github.com/nacholibre/node-readlines) provides an elegant method to read a text file line-by-line.

# Objectives

# Implementation

```sh
npm install n-readlines --save
# or
yarn add n-readlines
```

```javascript
import LineByLine from 'n-readlines'

const fname = process.argv[2]
const reader = new LineByLine(fname)

let line = ''

while (line = reader.next()) {
  console.log(line.toString('utf8'))
}
```

# References
- [n-readlines](https://github.com/nacholibre/node-readlines)