var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.getAll().then((allMessages) => {
      res.statusCode(200);
      res.send(allMessages);
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
