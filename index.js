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
    await datahubClient
      .updateSceneByProjectIdAndDataId(hubName, _options.name, {
        currentScene: _options.scene || 'default',
      });
    return await datahubClient.getDataByProjectIdAndDataId(hubName, _options.name);
  };

  return datahubClient;
};
