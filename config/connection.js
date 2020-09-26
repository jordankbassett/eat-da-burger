var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    database:'burger_db'
})

    connection.connect(function(err){
            if(err)throw err;
            console.log('connect'+connection.theradid);
    });
    module.exports = connection;
    

    