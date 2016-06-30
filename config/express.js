var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var exphbs  = require('express-handlebars');
var session = require('express-session')

module.exports = function() {

    var app = express();
    var sess = {
      secret: 'FastCode2016',
      cookie: { maxAge: 60000 }
    }

    app.engine('handlebars', exphbs({defaultLayout: 'model', layoutsDir: "app/views/"}));
    app.enable('view cache');

    app.use(express.static('./public'));
    app.set('view engine', "handlebars");
    app.set('views','./app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(session(sess));

    if (app.get('env') === 'production') {
        app.set('trust proxy', 1) // trust first proxy 
        sess.cookie.secure = true // serve secure cookies 
    }

    load('routes',{cwd: 'app',verbose:true})
        .then('objects')
        .into(app);

    app.use(function(req, res, next){
        res.status(404).render("erros/404");
    });

    // app.use(function(error,req, res, next){
    //     res.status(500).render("erros/500");
    // });
    
    return app;
};
