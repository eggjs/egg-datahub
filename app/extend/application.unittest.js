'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');

module.exports = {
  datahubClient() {
    return new DataHubSDK(this.config.datahub);
  },
};
