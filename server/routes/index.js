var express = require('express');
var router = express.Router();
var graph = require("../models/Graph")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/graphs', function(req, res, next) {
	console.log(req.body.data);
  graph.create(req.body,(error) => console.log(error));
});

module.exports = router;
