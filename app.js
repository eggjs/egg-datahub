'use strict';

const path = require('path');
const child_process = require('child_process');

module.exports = app => {
  const defaultConfig = {
    port: 5678,
  };

  const config = Object.assign(defaultConfig, app.config.datahub);

  const dataHubPath = require.resolve('macaca-datahub');

  const binPath = path.join(dataHubPath, '..', 'bin', 'datahub.js');

  const child = child_process.spawn(
    binPath,
    [
      'server',
      '-o',
      JSON.stringify(config),
    ],
  );

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on('data', data => {
    app.logger.info(data.trim());
  });

  child.stderr.on('data', data => {
    app.logger.error(data.trim());
  });

  child.on('close', code => {
    app.logger.info(`datahub exit with code: ${code}`);
  });
};
