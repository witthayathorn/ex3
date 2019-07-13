var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'อิอิ' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'อิอิ' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'อิอิ' });
});

module.exports = router;
