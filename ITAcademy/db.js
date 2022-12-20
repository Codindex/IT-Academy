var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Ecamien',
    password: 'grblxq',
    database: 'it_academy'
});

connection.connect(function(err) {if (err) console.log(err);});

module.exports = connection;