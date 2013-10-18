var config = require('../config');
var restify = require('restify');
var url = require('url');

<<<<<<< HEAD
=======

>>>>>>> 760588c5ed7badefeae4ee55b5dcb9d11cc3cf8d
var options = config.server;
var api = restify.createJsonClient(options);
if (options.username && options.password) {
  api.basicAuth(options.username, options.password);
}

module.exports = function(req, res) {
  api.get('/status', function(err, req, rez, result) {
    res.render('status.html', { 
      result: result, 
      url: options.url, 
      user: options.username
    });
  });
}
