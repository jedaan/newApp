'use strict';
// require('css-modules-require-hook')({
//   generateScopedName: '[path][name]__[local]__[hash:base64:5]',
//   extensions: ['.scss', '.css'],
//   camelCase: true
// });

import express from 'express';
import config from './config/environment/index.js';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import renderer from './viewsRenders/index';
import createStore from './viewsRenders/createStore';
import { matchRoutes } from "react-router-config"
import Routes from '../src/Routes';
import proxy from "express-http-proxy"

let app = express();
let env = config.env;

app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(compression());

let publicRoot = path.join(config.root, config.publicRoot);
app.use(express.static(publicRoot));
app.set('appPath', publicRoot);

app.use(
  "/api/",
  proxy("http://localhost:63835", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts
    }
  })
);

if (env === 'development' || env === 'test') {
  app.use(require('errorhandler')());
}

app.get("*", (req, res) => {
  const store = createStore(req);
  // Finding out when the data loading is finished
  const promises = matchRoutes(Routes, req.path)
    .map(({ route: { loadData } }) => (loadData ? loadData(store) : null))
    /**
     * wait for all the promises to resolve or reject
     * for that wrap every promise with an outer promise
     * and resolve them regardless they are resolved or rejected internally
     */
    .map(
      promise =>
        promise &&
        new Promise(res => {
          promise.then(res).catch(res)
        })
    );

  Promise.all(promises).then(() => {
    const context = {},
      content = renderer(req, store, context);

    if (context.url) return res.redirect(302, context.url);
    if (context.notFound) res.status(404);

    res.send(content)
  })
});

let server = http.createServer(app);

server.listen(config.port, config.ip, function () {
  console.log('\nExpress server listening on %d, in %s mode', config.port, app.get('env'));
  console.log('Press Ctrl+C to quit.');

  if (env === 'development') {
    require('ripe').ready();
  } else {
    if (env === 'local') {
      require('ripe').ready();
    }
  }
  server.emit('appStarted');
});

module.exports = server;
