'use strict';

const child_process = require('child_process');

module.exports = class {
  constructor(app) {
    this.app = app;
    this.child = null;
    this._startPromise = new Promise((resolve, reject) => {
      this._startResolve = resolve;
      this._startReject = reject;
    });
  }

  async didLoad() {
    const { app } = this;
    const config = Object.assign({}, app.config.datahub);
    const binPath = require.resolve('macaca-datahub/bin/datahub-server.js');

    const child = this.child = child_process.spawn(
      binPath,
      [
        '-o',
        JSON.stringify(config),
      ],
    );

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');

    const startTime = Date.now();
    child.stdout.on('data', data => {
      let log = data.trim();
      if (log.includes('DataHub server start at: http://')) {
        this._startResolve();
        log += ` (${Date.now() - startTime}ms)`;
      } else if (log.includes('DataHub start unsuccessfully')) {
        this._startReject(new Error(log));
        log += ` (${Date.now() - startTime}ms)`;
      }
      app.logger.info('[egg-datahub] %s', log);
    });

    child.stderr.on('data', data => {
      app.logger.error('[egg-datahub:error] %s', data.trim());
    });

    child.on('close', code => {
      const level = code === 0 ? 'info' : 'warn';
      app.logger[level]('[egg-datahub] datahub process#%s exit with code: %s', child.pid, code);
    });
    app.logger.info('[egg-datahub] datahub process#%s spawn success, config: %j', child.pid, config);
    // kill datahub process too
    process.on('exit', () => {
      process.kill(child.pid);
    });
  }

  async willReady() {
    await this._startPromise;
  }

  async beforeClose() {
    if (this.child) {
      this.app.logger.info('[egg-datahub] killing datahub process#%s', this.child.pid);
      this.child.kill();
    }
  }
};
