'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');

module.exports = {
  datahubClient() {

    const datahubClient = new DataHubSDK(this.config.datahub);

    datahubClient.switchScene = async (_options = {}) => {

      const scene = _options.scene || 'default';

      // update current scene
      await datahubClient.updateSceneByProjectIdAndDataId(
        this.config.datahub.hubName,
        _options.name, {
          currentScene: scene,
        }
      );

      return await datahubClient.getSceneDataByProjectIdAndDataId(
        this.config.datahub.hubName,
        _options.name,
        scene
      );
    };

    return datahubClient;
  },
};
