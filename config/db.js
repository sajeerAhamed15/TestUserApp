const neDB = require('nedb');
const db = new neDB({ filename: 'my.db', autoload: true });

module.exports = db;
