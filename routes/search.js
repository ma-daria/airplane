const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

const city = require('../database/models/city');
const airport = require('../database/models/airport');
const flight = require('../database/models/flight');

const Op = Sequelize.Op;

let flightMas = [];
let visitedSity = [];

router.get('/', async function (req, res) {

    let  city_from = req.query.city_from;
    let city_to = req.query.city_to;
    let date_f = req.query.date_fl;

    let d = new Date(date_f);
    let dd = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes()+dd);

    let from = await city.findOne({
        attributes: ['id'],
        where: {city_mame: city_from}
    })
        .catch((err) => {
            console.log(err)
        });

    let to = await city.findOne({
        attributes: ['id'],
        where: {city_mame: city_to}
    })
        .catch((err) => {
            console.log(err)
        });

    await Search(from, d);

    res.render('index', {
        c_from: city_from,
        c_to: city_to,
        date: date_f
    });
});


async function Search(city_from, date_f) {
    visitedSity.push(city_from);

    let air_from = await airport.findAll({
        attributes: ['id'],
        where: {city: city_from}
    })
        .catch((err) => {
            console.log(err)
        });


    let fli  = await flight.findAll({
        where: {
            flight_airport_from: { [Op.or]: air_from },

            flight_data_from: { [Op.gt]: date_f }
        }
    })
        .catch((err) => {
            console.log(err)
        });

    for (let i = 0 ; i < fli.length; i++){
        flightMas.push([fli.dataValue.id, fli.dataValue.flight_airport_from, fli.dataValue.flight_airport_from, fli.dataValue.flight_price]);



        if (visitedSity.indexOf(dataValue.flight_airport_to) !== -1)
            Search(fli.dataValue.flight_airport_to, fli.dataValue.flight_data_to);
    }
}




module.exports = router;