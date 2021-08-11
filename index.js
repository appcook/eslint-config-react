module.exports = {
  root: true,

  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],

  plugins: ['react', 'prettier'],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      allowImportExportEverywhere: false,
    },
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    indent: 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    eqeqeq: ['warn'],
    'no-const-assign': ['error'],
    'no-empty': ['error'],
    'no-console': 0,
    'react/display-name': 0,
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      plugins: ['@typescript-eslint', 'prettier', 'react'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },

      rules: {
        'react/prop-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
};
