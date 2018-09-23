var express = require('express');
var path = require('path');
var favicon= require('static-favicon');
var logger = require('morgan');
var cookieParser = require ('cookie-parser');
var bodyParser = require ('body-parser');
var session = require('express-session');
var fs = require('fs');
// var https = require('https');


// var certOptions = {
//   key: fs.readFileSync(path.resolve('routes/server.key')),
//   cert: fs.readFileSync(path.resolve('routes/server.crt'))
// }
// var app = express();
// var server = https.createServer(certOptions, app).listen(8083)


var http = require('http');

var app = express();

// These could (should) be set as env vars.
var port = process.env.PORT || 5000;
var host = process.env.HOST || 'localhost';

// No matter what hits the server, we send the same thing.
http.createServer(app).listen(port, host);

// // This message prints in the console when the app starts.
// console.log(`App running at http://${host}:${port}`);
// // var server = https.createServer(certOptions, app).listen(80)

//===============MIDDLEWARES AND VIEW ENGINE=========//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'session secret key'}));
app.use(express.static(path.join(__dirname, 'public')));


//===============ROUTES==========//
app.get('/', function(req, res){
  res.render('index', {
    title: 'South Shield'
  });
});
app.get('/southshields', function(req, res){
  res.render('southshields');
});
app.get('/ontheway', function(req, res){
  res.render('ontheway', {
    title: 'On The Way'
  });
});

module.exports = app;
