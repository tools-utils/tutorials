# Introduction

A command line tool that takes a `template` and a `csv` file for `pdf` file generation.

# Implementation

- `csv` file

```csv
name;desc;lat;lon
Bus station;Bus station;10.0;20.0
Rail station;Rail station;10.2;20.2
```

- `template` file

```json
{
	"content": [
		"{{{ name }}}",
		"{{{ desc }}}"
	]
}
```

- **Usage**

```sh
yarn build

yarn start --csv=test.csv --template=template.json
```

# References

- [yargs](https://github.com/yargs/yargs) to read command line inputs
- [papaparse](https://github.com/mholt/PapaParse) to to parse `csv`
- [mustache](https://github.com/janl/mustache.js) to render `template`
- [pdfmake](https://github.com/bpampuch/pdfmake) to generate `pdf`

