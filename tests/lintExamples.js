const path = require('path');
const spawnProcess = require('./utils/spawnProcess');

function resolve(url) {
  return path.join(__dirname, url);
}

spawnProcess(resolve('../examples/cra-app'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/cra-ts-app'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/umi-app'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/vite-react-app'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/vite-react-ts-app'), 'npm', ['run', 'lint']);
