const spawn = require('cross-spawn').spawn;

module.exports = function spawnProcess(cwd, cmd, args) {
  return new Promise((resolve, reject) => {
    // example:
    // const child = spawn('ls', ['-a'], {
    //   cwd: cwd,
    //   stdio: 'inherit',
    // })

    const child = spawn(cmd, args || [], {
      cwd: cwd,
      stdio: 'inherit',
    });

    if (!child.stdout) {
      return;
    }

    child.stdout.on('data', function (data) {
      console.log(data.toString());
    });

    child.stdout.on('end', (data) => {
      resolve({ code: 0 });
    });

    child.stdout.on('close', (data) => {
      resolve({ code: 0 });
    });

    child.stderr.on('data', function (data) {
      console.log(data.toString());
    });

    child.on('exit', function (code) {
      code === 0
        ? resolve({ code })
        : reject({ code, message: `exec command exited with code: ${code}` });
    });
  });
};
