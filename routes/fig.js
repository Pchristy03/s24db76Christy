var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fig', { title: 'Search Results: Fig' });
});

module.exports = router;
