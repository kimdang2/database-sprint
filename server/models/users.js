var Sequelize = require('sequelize');
var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },
  create: function (username) {
    //console.log('username in create',username);
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username) VALUES (?)', [username], ((err, results, fields) => {
        if (err) {
          //console.log('error from create',err);
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  }
};

// module.exports = {
//   User: db.define('User', {
//     username: Sequelize.STRING
//   })
// }