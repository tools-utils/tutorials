# Introduction
This is a project template that enable using `async/await` in Node.

# Objectives

- Define dependencies in `package.json`
- Configure `.babelrc`

# Install

```sh
npm i @babel/cli @babel/core @babel/plugin-transform-async-to-generator @babel/preset-env --dev-save
# or
yarn add @babel/cli @babel/core @babel/plugin-transform-async-to-generator @babel/preset-env --dev
```

- `package.json`

```json
{
  "name": "async-await",
  "version": "1.0.0",
  "main": "lib/index.js",
  "license": "MIT",
  "scripts": {
    "build": "./node_modules/.bin/babel --version && ./node_modules/.bin/babel src -d lib",
    "start": "node lib/index.js"
  },
  "devDependencies": {
    "@babel/cli": "^7.7.7",
    "@babel/core": "^7.7.7",
    "@babel/plugin-transform-async-to-generator": "^7.7.4",
    "@babel/preset-env": "^7.7.7"
  }
}
```

# Babel

- `.babelrc`

```json
{
  "presets": [
    [
    "@babel/preset-env",
    {
      "targets": {
          "node": "current"
      }
    }
    ]
  ],
  "plugins": ["@babel/plugin-transform-async-to-generator"]
}
```

# Usage

- Build and run [source code](https://github.com/tools-utils/tutorials/tree/master/async-await)

```sh
npm run build && npm start
# or
yarn build && yarn start

# async/await in node with babel...
```

# References
- [plugin-transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator)
