// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// exports.demo = function (req, res) {
//     console.log('hello');
// }
// exports.showAll = function (req, res) {
//     MongoClient.connect(url, function (err, db) {
//         var dbo = db.db("scratch");
//         if (err) throw err;
//         // console.log(dbo);

//         // dbo.collection("zips").findOne({}, function (err, result) {
//         dbo.collection("zips").find({}, function (err, result) {            
//             if (err) throw err;
//             // console.log(result);

//             res.send(JSON.stringify(result))
//             db.close();
//         });
//     });
// }

// exports.insert = function (req, res) {
//     MongoClient.connect(url, function(err, db){
//         var dbo = db.db("scratch");

//         if(err) throw err;
//         dbo.collection('zips').insertOne({
//             item:'canvas',
//             qty:100,
//             tags:['cotton'],
//             size:{h:20, w: 43, uom:'cm'}
//         })
//     });
// }

exports.test = function (req, res) {
    res.send("test success");
}
