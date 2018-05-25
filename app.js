'use strict';

const { spawn } = require('child_process');

const env = Object.create(process.env);

env.DATAHUB_STORE_PATH = process.cwd() + '/data';
env.DATAHUB_SERVER_PORT = 5678;

const datahub = spawn(
  './node_modules/macaca-datahub/bin/macaca-datahub-server.js',
  [ 'server' ],
  {
    env,
  }
);

datahub.stdout.on('data', data => {
  console.log(`datahub output: ${data}`);
});

datahub.stderr.on('data', data => {
  console.log(`error: ${data}`);
});

datahub.on('close', code => {
  console.log(`datahub exit code: ${code}`);
});
