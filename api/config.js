
var api = { console: { autoLoad: true} };

var express = require('express'),
  router = api.router = express.Router(),
  docRouter = require('docrouter').docRouter,
  config = require('../config');


module.exports = api;

docRouter(router, "/api/config", function (router) {

  router.post('/get', function (req, res) { 
    return res.json(config);
  },
  {
      id: 'config_get',
      name: 'get',
      usage: 'config get',
      example: 'config get"',
      doc: 'get current effective configuration',
      params: {},
      response: { representations: ['application/json'] }
    }
  );

});
