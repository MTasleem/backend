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

exports.getAllCustomer = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mongodbDatabase);
        var myobj = [
            { name: 'John', address: 'Highway 71' },
            { name: 'Peter', address: 'Lowstreet 4' },
            { name: 'Amy', address: 'Apple st 652' },
            { name: 'Hannah', address: 'Mountain 21' },
            { name: 'Michael', address: 'Valley 345' },
            { name: 'Sandy', address: 'Ocean blvd 2' },
            { name: 'Betty', address: 'Green Grass 1' },
            { name: 'Richard', address: 'Sky st 331' },
            { name: 'Susan', address: 'One way 98' },
            { name: 'Vicky', address: 'Yellow Garden 2' },
            { name: 'Ben', address: 'Park Lane 38' },
            { name: 'William', address: 'Central st 954' },
            { name: 'Chuck', address: 'Main Road 989' },
            { name: 'Viola', address: 'Sideway 1633' }
        ];
        dbo.collection("customers").find({}).toArray(function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.send(result);
            db.close();
        });
        // dbo.collection("customers").insertMany(myobj, function (err, res) {
        //     if (err) throw err;
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     db.close();
        // });
    });

}

exports.test = function (req, res) {
    res.send("test success");
}
