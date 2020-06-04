var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    //console.log('req.json is', req.json);
    models.users.create(req.body.username).then(() => {
      res.status(201);
      res.send('user added');
    })
    .catch((err) => {
      console.log('error in catch block',err);
      res.status(500);
      res.json(err);
    });
  }
};

// module.exports = {
//   get: function (req, res) {
//     models.getAll().then((allMessages) => {
//       res.statusCode(200);
//       res.send(allMessages);
//     });

//   }, // a function which handles a get request for all messages
//   post: function (req, res) {
//     models.create(req.json).then(() => {
//       res.statusCode(201);
//       res.send('message posted');
//     })
//   } // a function which handles posting a message to the database
// };
