var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');
var MongoClient = require('mongodb').MongoClient;

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

MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server.");
    var dbo = db.db(mongodbDatabase);
    if (err) throw err;
    var dbase = db.db(mongodbDatabase); //here
    dbase.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //close method has also been moved to client obj
    });
});


app.get('/', function (req, res) {
    res.send('welcome to nodejs Ap on Heroku');
});

routes(app);
app.listen(port);