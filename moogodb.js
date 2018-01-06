var mongoose = require('mongoose').connect('mongodb://127.0.0.1/node_club');

module.exports = mongoose;

// var mongoose = require('mongoose'),
//     DB_URL = 'mongodb://127.0.0.1/node_club';

// /**
//  * 连接
//  */
// var db = mongoose.connect(DB_URL);
// module.exports = db

// /**
//  * 连接成功
//  */
// mongoose.connection.on('connected', () => {
//     console.log('Mongoose connection open to ' + DB_URL);
// });

// /**
//  * 连接异常
//  */
// mongoose.connection.on('error', (err) => {
//     console.log('Mongoose connection error: ' + err);
// });

// /**
//  * 连接断开
//  */
// mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose connection disconnected');
// });