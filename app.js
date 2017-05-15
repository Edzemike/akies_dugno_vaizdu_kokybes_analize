var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var validator = require('express-validator');
var path = require('path');
var flash = require('connect-flash');


mongoose.connect('localhost:27017/eyesDB');
require('./passport');



var app = express();
app.listen(3004);

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secretKey', resave: false, saveUninitialized: false}));



module.exports = app;