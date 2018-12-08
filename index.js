var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');

app.get('/', function (req, res) {
    res.send('welcome to nodejs Ap on Heroku');
});

routes(app);
app.listen(port);