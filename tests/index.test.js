const ESLint = require('eslint').ESLint;
const eslintConfig = require('../index.js');
const path = require('path');
const { getErrorCount, getErrorMessages } = require('./utils/resultParser');

const eslint = new ESLint({
  baseConfig: eslintConfig,
});

function resolve(filepath) {
  return path.join(__dirname, filepath);
}

test('Test config worked', () => {
  return eslint.lintText(`const a = 1`).then((results) => {
    const errorCount = getErrorCount(results);
    const errorMessages = getErrorMessages(results);

    expect(errorCount).toBe(2);
    expect(errorMessages.length).toBe(2);
  });
});

test('Test lint js?(x) files', () => {
  return eslint
    .lintFiles([
      resolve('../examples/cra-app/src/index.js'),
      resolve('../examples/vite-react-app/src/main.jsx'),
    ])
    .then((results) => {
      const errorCount = getErrorCount(results);
      const errorMessages = getErrorMessages(results);

      expect(errorCount).toBe(2);
      expect(errorMessages.length).toBe(2);
    });
});

test('Test lint ts?(x) files', () => {
  return eslint
    .lintFiles([
      resolve('../examples/cra-ts-app/src/setupTests.ts'),
      resolve('../examples/cra-ts-app/src/index.tsx'),
      resolve('../examples/vite-react-ts-app/src/main.tsx'),
    ])
    .then((results) => {
      const errorCount = getErrorCount(results);
      const errorMessages = getErrorMessages(results);

      expect(errorCount).toBe(4);
      expect(errorMessages.length).toBe(4);
    });
});
