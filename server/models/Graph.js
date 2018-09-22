var db = require("./db.js"),
  ObjectId = require("mongodb").ObjectID;

/*
Search represents the database methods for accesing the users collections.
{
  _id,
  name,
  email,
  password,
  bio,
  clubs: [clubs: ObjectID],
  messages: [mesages]
}
*/

/*
Object that represents the messages in a group or club board
{
  sender_name,
  sender: user:ObjectID,
  text,
  timestamp: Date (Decided at server side)
}
*/

var Graph = {};

Graph.findTwenty = function (graph, callback){
  var graphs = db.get().collection("graphs");
   graphs.find({},function(err,docs){callback(err,docs)}).limit(20);
};
Graph.findById = function(id_search, graphs){
  var graphs = db.get().collection("graphs");
  graphs.findOne({login:id_search}, function(err, user){
    callback(err, user);
  });
};

Graph.create = function(graph, callback){

var client = db.get().collection("graphs");
  client.insert(graph, function(err, insertedDocs){
    callback(err, insertedDocs);
  });
};


module.exports = Graph;