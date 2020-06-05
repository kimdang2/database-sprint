var Sequelize = require('sequelize');
var db = require('../db');
var Promise = require('bluebird');

// module.exports = {
//   getAll: function () {
//     return new Promise((resolve, reject) => {
//       db.query('SELECT * FROM messages', ((err, results, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       }));
//     });
//   }, // a function which produces all the messages
//   create: function (data) {
//     return new Promise((resolve, reject) => {
//       let arr = [data.username, data.message, data.roomname];
//       //console.log(data.message.length);
//       db.query('INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)', arr, ((err, results, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       }));
//     });
//   } // a function which can be used to insert a message into the database
// };

//sequelize
module.exports = {
  Message: db.define('messages', {
    username: Sequelize.INTEGER,
    message: Sequelize.STRING,
    roomname: Sequelize.STRING
  }, {
    timestamps: false
  })
};