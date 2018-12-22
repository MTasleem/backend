var express = require('express');
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var routes = require('./routes');
var port = process.env.PORT || 8080;

var cloud = true;
var authenticate = '';
//cloud 
if (cloud) {
    mongodbHost = 'ds259742.mlab.com';
    mongodbPort = '59742';
    authenticate = 'tasleem_db:tasleem_db123@'
}

var mongodbDatabase = 'test_mlab';

// connect string for mongodb server running locally, connecting to a database called test
var url = 'mongodb://' + authenticate + mongodbHost + ':' + mongodbPort + '/' + mongodbDatabase;

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var db = mongo.connect(url, function (err, response) {
    if (err) {
        throw err;
        // console.log(err);
    }
    else {
        console.log('Connected successfull');
    }
});
routes(app);


app.listen(port, function () {
    console.log('Example app listening on port' + port)
});