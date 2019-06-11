'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/plugin.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/hello',
    });
    return app.ready();
  });

  it('should pkg exists', () => {
    assert(app.config.pkg.name === 'datahub-test');
  });

  it('should datahubClient exists', async () => {
    const res = await app.httpRequest()
      .get('/');
    assert(res.status === 200);
    assert(res.body.datahubClient === true);
  });
});
