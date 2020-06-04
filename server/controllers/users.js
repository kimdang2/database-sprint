var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll().then((allUsers) => {
      //console.log('all messages from get are', allMessages);
      res.status(200);
      res.send(allUsers);
    });
  },
  post: function (req, res) {
    //console.log('req.json is', req.json);
    models.users.create(req.body.username).then(() => {
      res.status(201);
      res.send('user added');
    })
      .catch((err) => {
        console.log('error in catch block', err);
        res.status(500);
        res.json(err);
      });
  }
};

//sequelize

// module.exports = {
//   get: function (req, res) {
//     models.users.User.sync()
//       .then(() => {
//         console.log('find all users', models.User.findAll())
//         res.status(200);
//         res.send(models.User.findAll());
//       })
//   },
//   post: function (req, res) {
//     models.users.User.sync()
//       .then(() => {
//         models.User.create(req.body.username)
//       })
//       .then(() => {
//         res.status(201);
//         res.send('user added');
//       })
//   }
// }