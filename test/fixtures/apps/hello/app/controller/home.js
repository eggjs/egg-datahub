'use strict';

// GET /
module.exports = async ctx => {
  await ctx.app.datahubClient().switchScene({
    hub: 'openapi',
    pathname: 'api/create',
    scene: 'success',
    method: 'GET',   // method is optional, default method is 'ALL'
  });
  
  ctx.body = {
    datahubClient: !!ctx.app.datahubClient(),
  };
};
