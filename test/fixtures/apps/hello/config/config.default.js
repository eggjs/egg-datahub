'use strict';

const path = require('path');

exports.keys = 'foo';

exports.logger = {
  consoleLevel: 'INFO',
  coreLogger: {
    consoleLevel: 'INFO',
  },
};

exports.datahub = {
  store: path.join(__dirname, 'data'),
};
