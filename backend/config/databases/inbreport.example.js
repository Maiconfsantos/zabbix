var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'database'
})

connection.connect();

module.exports = connection;