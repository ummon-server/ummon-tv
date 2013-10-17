var passport = require('passport');
var config = require('../config');

module.exports = function(req, res) {
  res.render('index.html', { user: req.user });
}