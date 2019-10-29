const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();
const city = require('../database/models/city');


router.get('/', async function (req, res) {
    let mod = await city.findOne({
        where: {
            city_name: req.query.text
        }
    });
    if (mod !== null)
        res.end("ok");
    else
        res.end("null");
});

module.exports = router;