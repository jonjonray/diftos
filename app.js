var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var mongoose = require('mongoose');
var auth = require('./routes/auth');
var sites = require('./routes/sites');

mongoose.connect('mongodb://localhost/test');

var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname)));

// app.use('/', index);
app.use('/users', auth);
app.use('/api/auth', auth);
app.use('/sites', sites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




module.exports = app;
