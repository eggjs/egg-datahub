'use strict';

const _ = require('xutil');
const path = require('path');
const DataHub = require('macaca-datahub');

module.exports = app => {
  const datahubConfig = Object.assign({
    store: path.join(app.baseDir, 'data'),
  }, app.config.datahub);
  _.mkdir(path.resolve(datahubConfig.store));
  const datahub = new DataHub(datahubConfig);
  datahub.startServer()
    .then(() => console.log('Macaca DataHub started'))
    .catch(e => console.log('Macaca DataHub error', e));
};

