'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');
const DATAHUB = Symbol('Application#datahubClient');

module.exports = {
  datahubClient() {
    if (!this[DATAHUB]) {
      this[DATAHUB] = new DataHubSDK(this.config.datahub);
    }
    return this[DATAHUB];
  },
};
