var express = require('express');
var router = express.Router();

var SignUpHandler = function(req, res) {
    console.log(req, res);
    var context = {

    };
    res.html_response('index', true, context);
};

router.get('/index', SignUpHandler);

exports.routes = router;
