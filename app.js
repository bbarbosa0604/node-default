var app = require('./config/express')();
var http = require('http').Server(app);

var porta = process.env.PORT || 3000;

var server = http.listen(porta, function () {

    console.log('41');

});


