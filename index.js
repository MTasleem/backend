var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');

app.use(function (req, res, next) {
  console.log('middleware working')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  next();
});

app.get('/', function (req, res) {
    res.send('welcome to nodejs Ap on Heroku');
});

routes(app);
app.listen(port);