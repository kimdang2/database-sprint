var db = require('../db');
var Promise = require('bluebird')

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.con.query('SELECT messages.message FROM messages', ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    })
  }, // a function which produces all the messages
  create: function () {
    return new Promise((resolve, reject) => {
      db.con.query('SELECT messages.message FROM messages', ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    })
  } // a function which can be used to insert a message into the database
};
