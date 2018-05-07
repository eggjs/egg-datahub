'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');

exports.getClient = (options = {}) => {
  const {
    port,
    hubName,
  } = options;

  const datahubClient = new DataHubSDK({
    port,
  });

  datahubClient.getMockDataByScene = async (_options = {}) => {
    return await datahubClient.getSceneDataByProjectIdAndDataId(hubName, _options.name, _options.scene || 'default');
  };

  return datahubClient;
};
