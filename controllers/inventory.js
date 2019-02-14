var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var Schema = mongo.Schema;
var UsersSchema = new Schema({
    name: { type: String },
    address: { type: String },
}, { versionKey: false });

var QuestionSchema = new Schema({
    question: { type: String },
    tips: [{
        key: {
            type: String
        }
    }],
    ans: {
        type: String
    },
    anscode: {
        type: Number
    }
}, { versionKey: false });

var model = mongo.model('customers', UsersSchema, 'customers');
exports.getUser = function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
}
var modelQuestion = mongo.model('question', UsersSchema, 'QuestionSchema');
exports.getAllQuestion = function (req, res) {
    modelQuestion.find({}, function (err, data) {
        if (err) {
            console.log(err);

            res.send(err);
        }
        else {
            console.log(data);

            res.send(data);
        }
    });
}

exports.deleteUser = function (req, res) {
    console.log(req.params.id)

    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    let data = {
        "id": 4
    }

    model.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ data: "Record has been Deleted..!!" });
        }
    });
}

// app.post("/api/deleteUser", function (req, res) {
//     model.remove({ _id: req.body.id }, function (err) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send({ data: "Record has been Deleted..!!" });
//         }
//     });
// })

exports.saveUser = function (req, res) {
    var mod = new model(req.body);

    // console.log(mod);
    console.log(model);


    // if (req.body.mode == "Save") {
    //     mod.save(function (err, data) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         else {
    //             res.send({ data: "Record has been Inserted..!!" });
    //         }
    //     });
    // } else {
    model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address },
        function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                console.log(data);

                // res.send({ data: "Record has been Updated..!!" });
            }
        });


    // }
}

exports.test = function (req, res) {
    res.send("test success");
}
