'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');

module.exports = {
  datahubClient() {

    const datahubClient = new DataHubSDK(this.config.datahub);

    datahubClient.switchScene = async (_options = {}) => {

      if (!_options.pathname) {
        throw new Error('pathname is required in switchScene');
      }

      const scene = _options.scene || 'default';

      // update current scene
      await datahubClient.updateSceneByProjectIdAndDataId(
        this.config.datahub.hubName,
        _options.pathname, {
          currentScene: scene,
        }
      );

      return await datahubClient.getSceneDataByProjectIdAndDataId(
        this.config.datahub.hubName,
        _options.pathname,
        scene
      );
    };

    return datahubClient;
  },
};
