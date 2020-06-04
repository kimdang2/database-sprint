var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.statusCode(200);
    res.send(models.getAll())}, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
