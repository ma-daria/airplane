var express = require('express');
var router = express.Router();
const city = require('../database/models/city');
const airport = require('../database/models/airport');
const flight = require('../database/models/flight');

router.get('/', async function(req, res, next) {
    let flightCheap = JSON.parse(req.query.flightCheap);
    let flightCheapWay = flightCheap.slice(0, flightCheap.length-1);
    let flightCheapCost = flightCheap[flightCheap.length-1];
    let flightCheapAllInfarmation = [];



    for (let i = 0; i < flightCheapWay.length; i++){
        let information = await flight.findOne({
            include: [{
                model: airport,
                include: [{
                    model: city, as: 'city'
                }], as: 'airport_from'
                },
                {
                    model: airport,
                    include: [{
                        model: city, as: 'city'
                    }], as: 'airport_to'
                }],
            where:{
                id: flightCheapWay[i]
            }
        })
            .catch((err) => {
                console.log(err)
            });
        flightCheapAllInfarmation.push(information);
    }

    timeWay = flightCheapAllInfarmation[flightCheapAllInfarmation.length-1].dataValues.flight_data_to - flightCheapAllInfarmation[0].dataValues.flight_data_from
    let hour = Math.trunc(timeWay/1000/60/60);
    res.render('about_flights', {
        flightCheapAllInfarmation: flightCheapAllInfarmation,
        flightCheapCost: flightCheapCost,
        timeWay: hour + ' часов ' + Math.trunc((timeWay-hour*1000*60*60)/1000/60) + ' минут'
    });
});

module.exports = router;
