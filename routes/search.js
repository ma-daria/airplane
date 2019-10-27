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

    let  cityFrom = req.query.cityFrom;
    let cityTo = req.query.cityTo;
    let dateF = req.query.dateFl;

    let d = new Date(dateF);
    let dd = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes()+dd);

    let from = await city.findOne({
        attributes: ['id'],
        where: {city_name: cityFrom}
    })
        .catch((err) => {
            console.log(err)
        });

    let to = await city.findOne({
        attributes: ['id'],
        where: {city_name: cityTo}
    })
        .catch((err) => {
            console.log(err)
        });

    await Search(from.dataValues.id, d);

    console.log(flightMas);

    res.render('index', {
        cFrom: cityFrom,
        cTo: cityTo,
        date: dateF
    });
});


async function Search(cityFrom, dateF) {
    visitedSity.push(cityFrom);

    let airFrom = await airport.findAll({
        attributes: ['id'],
        where: {airport_city: cityFrom}
    })
        .catch((err) => {
            console.log(err)
        });

    let airFromId = airFrom.map((o) => o.dataValues.id);
    let fli = await flight.findAll({
        where: {
            flight_airport_from: { [Op.or]: airFromId },

            flight_data_from: { [Op.gt]: dateF }
        }
    })
        .catch((err) => {
            console.log(err)
        });

    for (let i = 0 ; i < fli.length; i++){

        let sitT = await airport.findOne({
            where: {
            id: fli[i].dataValues.flight_airport_to
            }
        })
            .catch((err) => {
                console.log(err)
            });

        flightMas.push([fli[i].dataValues.id, cityFrom, sitT.dataValues.airport_city, fli[i].dataValues.flight_price]);


        if (visitedSity.indexOf(sitT.dataValues.airport_city) === -1)
            await Search(sitT.dataValues.airport_city, fli[i].dataValues.flight_data_to);
    }
}




module.exports = router;