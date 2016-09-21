var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var parseurl = require('parseurl');
var path = require('path');
var logger = require('morgan');
var render = require('./handler/base_handler');
var config = require('.././config/config');

var index = require('./handler/index_handler');
var user = require('./handler/user_handler');

var app = express();
var bodyParser = require('body-parser');


app.set('views', path.join(__dirname, './template'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: config.session.secret,
    name: config.session.name,
    cookie: {
        maxAge: config.session.cookie_time
    },
    resave: false,
    saveUninitialized: true
}));
app.use(function(req, res, next) {
    var views = req.session.views;

    if (!views) {
        views = req.session.views = {}
    }
    var pathname = parseurl(req).pathname;
    views[pathname] = (views[pathname] || 0) + 1;
    next()
});

app.use(express.static(path.join(__dirname, 'static')));
app.use(render);
app.use('/', index.routes);
app.use('/user', user);
app.get("*", function(req, res) {
    res.status(404).end("404");
});
app.listen(config.web_port, function() {
    console.log('web listen on %s', config.web_port);
});
