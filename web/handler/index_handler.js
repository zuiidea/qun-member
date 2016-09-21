var express = require('express');
var router = express.Router();

var IndexHandler = function(req, res) {
    var context = {};
    res.html_response('index', true, context);
};

router.get('/', IndexHandler);

var SignUpHandler = function(req, res) {
    var context = {};
    res.html_response('signup', true, context);
};

router.get('/signup', SignUpHandler);

exports.routes = router;
