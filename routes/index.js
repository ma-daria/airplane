var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {
    cFrom: undefined,
    cTo: undefined,
    date: undefined,
    flightDateFrom: undefined,
    flightDateTo: undefined,
    flightCheap: undefined
  });
});

module.exports = router;
