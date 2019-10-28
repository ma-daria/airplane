var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log(req.query.flightCheap);
    res.render('about_flights', { });
});

module.exports = router;
