var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {

    city_from = req.query.city_from;
    city_to = req.query.city_to;
    date_f = req.query.date_fl;

    console.log(city_from);


    res.render('index', {
        c_from: city_from,
        c_to: city_to,
        date: date_f
    });
});


module.exports = router;