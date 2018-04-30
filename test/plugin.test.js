'use strict';

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/plugin.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../package');
    assert.equal(app.config.pkg.name, pkg.name);
  });
});
