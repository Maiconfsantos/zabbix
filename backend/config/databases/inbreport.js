var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'infra.inbtelecom.com.br',
    user: 'maiconflor',
    password: 'asdE@$156',
    database: 'inbreports'
})

connection.connect();

module.exports = connection;