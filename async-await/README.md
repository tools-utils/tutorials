# Install dependencies

```sh
npm i @babel/cli @babel/core @babel/plugin-transform-async-to-generator @babel/preset-env --dev-save 
yarn add @babel/cli @babel/core @babel/plugin-transform-async-to-generator @babel/preset-env --dev
```

# `package.json`

```json
{
  "name": "async-await",
  "version": "1.0.0",
  "main": "index.js",
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

# Usage

```
yarn build && yarn start

# async/await in node with babel...
```