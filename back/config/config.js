const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'request',
  password: 'request',
  database: 'Portfolio'
});

module.exports = connection;