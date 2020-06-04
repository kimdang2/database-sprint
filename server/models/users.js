var db = require('../db');

module.exports = {
  getAll: function () {},
  create: function (username) {
    //console.log('username in create',username);
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username) VALUES (?)', [username] ,((err, results, fields) => {
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
