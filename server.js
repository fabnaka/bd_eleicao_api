var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Olá mundo');
});

app.listen(5000, function(){
    console.log('App exemplo escutando na porta 5000');
});