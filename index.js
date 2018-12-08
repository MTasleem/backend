var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('welcome to nodejs Ap on Heroku');
});

app.listen(port);