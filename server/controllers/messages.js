var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll().then((allMessages) => {
      //console.log('all messages from get are', allMessages);
      res.status(200);
      res.send(allMessages);
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //console.log('post req',req.body)
    models.messages.create(req.body).then(() => {
      res.sendStatus(201);
      //res.send('message posted');
    })
  } // a function which handles posting a message to the database
};
