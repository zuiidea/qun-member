var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user').user;
mongoose.connect('mongodb://localhost/qun');



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req, res, next);
  res.render('index', { title: 'Express' });
});

module.exports = router;
