var neDB = require('nedb');
var db = new neDB({ filename: 'my.db', autoload: true });

module.exports = db;