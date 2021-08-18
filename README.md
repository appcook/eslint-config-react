# @appcook/eslint-config-react

[![npm version][npm-version-image]](npm-url)
[![npm downloads][npm-download-image]][npm-url]
[![node engine][node-engine-image]][npm-url]

[npm-version-image]: https://img.shields.io/npm/v/@appcook/eslint-config-react.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dm/@appcook/eslint-config-react.svg?style=flat-square
[node-engine-image]: https://img.shields.io/badge/node-%3E=10.12.0-blue.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appcook/eslint-config-react

ESLint configuration for React web application

</div>

## Usage

Install this package:

```shell
# use yarn
yarn add @appcook/eslint-config-react --dev


# use npm
npm install @appcook/eslint-config-react --save-dev
```

Then config your `.eslinrc` file:

```js
{
  "extends": "@appcook/react"
  "rules": {
    // add your own rules to overwrite
  }
}
```
