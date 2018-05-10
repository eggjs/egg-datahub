'use strict';

const _ = require('xutil');
const path = require('path');
const DataHub = require('macaca-datahub');
const detect = require('detect-port');

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

process.on('SIGINT', () => { // fix agent.exit error 110
  process.exit(0);
});

module.exports = agent => {
  const datahubConfig = Object.assign({
    store: path.join(agent.baseDir, 'data'),
  }, agent.config.datahub);
  _.mkdir(path.resolve(datahubConfig.store));
  const datahub = new DataHub(datahubConfig);
  agent.beforeStart(async () => {
    await datahub.startServer();
    const port = datahub.options.port;
    while (await detect(port) === port) {
      await sleep(1000);
    }
  });
};
