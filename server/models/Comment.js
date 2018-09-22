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

var Comment = {};


Comment.create = function(comment, callback){

var client = db.get().collection("comments");
  client.insert(comment, function(err, insertedDocs){
    callback(err, insertedDocs);
  });
};


module.exports = Comment;