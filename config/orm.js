var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb){
        connection.query('Select * From '+tableInput+';',function(err, result){
                if(err) throw err;
                cb(rewslut)
        })
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true Where id='+condition+';', function(err,result){
            if(err)throw err;
            cb(result);
        })
    }
}
module.exports = orm;