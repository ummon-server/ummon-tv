var config = require('../config');
var restify = require('restify');
var url = require('url');



module.exports = function(req, res) {
  var options = config.server;
  var api = restify.createJsonClient(options);
  if (options.username && options.password) {
    api.basicAuth(options.username, options.password);
  }

  api.get('/status', function(err, req, rez, result) {
    res.render('status.html', { 
      result: result, 
      url: options.url, 
      user: options.username
    });
  });
}