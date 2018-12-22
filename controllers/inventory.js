var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var Schema = mongo.Schema;
var UsersSchema = new Schema({
    name: { type: String },
    address: { type: String },
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
exports.test = function (req, res) {
    res.send("test success");
}
