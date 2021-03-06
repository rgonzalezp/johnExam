var express = require('express');
var router = express.Router();
var Graph = require("../models/Graph")
var Comment = require("../models/Comment")

var db = require("../models/db.js"),
  ObjectId = require("mongodb").ObjectID;


/* GET home page. */
router.get('/graphs', function(req, res, next) {

var client = db.get().collection("graphs");
client.find({}).limit(20).toArray(function(error, documents) {
    if (error) throw error;
    res.send(documents);
});

});

router.post('/graphs', function(req, res, next) {

const data = {
  data: req.body.data,
  mark: req.body.mark,
  encoding: req.body.encoding,
  timestamp: req.body.timestamp
}
try{
  Graph.create(data, function(err, inserted_search) {
						return res.status(200).json(data);});
}catch (err){
return res.status(400);
}

});

/* GET home page. */
router.get('/comments', function(req, res, next) {

var client = db.get().collection("comments");
client.find({}).limit(20).toArray(function(error, documents) {
    if (error) throw error;
    res.send(documents);
});

});

router.post('/comments', function(req, res, next) {

const data = {
  name: req.body.name,
  comment: req.body.comment,
  timestamp: req.body.timestamp
}
try{
  Comment.create(data, function(err, inserted_search) {
						return res.status(200).json(data);});
}catch (err){
return res.status(400);
}

});


module.exports = router;
