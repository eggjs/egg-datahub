'use strict';

const path = require('path');
const child_process = require('child_process');
const dataHubPath = require.resolve('macaca-datahub');

const binPath = path.join(dataHubPath, '..', 'bin', 'datahub.js');

const env = Object.create(process.env);

env.DATAHUB_STORE_PATH = process.cwd() + '/data';
env.DATAHUB_SERVER_PORT = 5678;

const child = child_process.spawn(
  binPath,
  [
    'server',
  ],
  {
    env,
  }
);

child.stdout.setEncoding('utf8');
child.stderr.setEncoding('utf8');

child.stdout.on('data', data => {
  console.log(`datahub output: ${data}`);
});

child.stderr.on('data', data => {
  console.log(`error: ${data}`);
});

child.on('close', code => {
  console.log(`datahub exit code: ${code}`);
});
