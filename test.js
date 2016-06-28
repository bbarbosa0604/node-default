var http = require('http');

var config = {
    hostname: 'localhost',
    port:3000,
    path: '/app.js',
    headers: {
        'Accept': 'text/html',
    }
};

http.get(config, function(res) {
    console.log(res.statusCode);
    console.log(res.body);

    res.on('data', function (body) {
        console.log('BODY: ' + body);
    });
});