const Dijkstra = require('../algorithm/Dijkstra');

const Sequelize = require('sequelize');

var express = require('express');
var router = express.Router();

const city = require('../database/models/city');
const airport = require('../database/models/airport');
const flight = require('../database/models/flight');

const Op = Sequelize.Op;

router.get('/', async function (req, res) {

    let  cityFrom = req.query.cityFrom;
    let cityTo = req.query.cityTo;
    let dateFrom = req.query.dateFrom;

    let dateFromTypeDate = new Date(dateFrom);
    let myTimeZone = dateFromTypeDate.getTimezoneOffset();
    dateFromTypeDate.setMinutes(dateFromTypeDate.getMinutes()+myTimeZone);

    let cityFromID = await city.findOne({
        attributes: ['id'],
        where: {city_name: cityFrom}
    })
        .catch((err) => {
            console.log(err)
        });

    let cityToID = await city.findOne({
        attributes: ['id'],
        where: {city_name: cityTo}
    })
        .catch((err) => {
            console.log(err)
        });

    let flightMas = [];
    let visitedSity = [];  //to do change {}
    await Search(cityFromID.dataValues.id, dateFromTypeDate, flightMas, visitedSity);

    let mas = Dijkstra.Dijkstra(flightMas , cityFromID.dataValues.id, cityToID.dataValues.id);

    console.log(flightMas);
    console.log(mas[0], mas[1]);

    res.render('index', {
        cFrom: cityFrom,
        cTo: cityTo,
        date: dateFrom
    });
});


async function Search(cityFrom, dateFrom, flightMas, visitedSity) {
    visitedSity.push(cityFrom);

    let airportFromAll = await airport.findAll({
        attributes: ['id'],
        where: {airport_city: cityFrom}
    })
        .catch((err) => {
            console.log(err)
        });

    let airportFromAllId = airportFromAll.map((o) => o.dataValues.id);
    let flightAll = await flight.findAll({
        where: {
            flight_airport_from: { [Op.or]: airportFromAllId },

            flight_data_from: { [Op.gt]: dateFrom }
        }
    })
        .catch((err) => {
            console.log(err)
        });

    for (let i = 0 ; i < flightAll.length; i++){

        let airportTo = await airport.findOne({
            where: {
            id: flightAll[i].dataValues.flight_airport_to
            }
        })
            .catch((err) => {
                console.log(err)
            });

        flightMas.push([flightAll[i].dataValues.id, cityFrom, airportTo.dataValues.airport_city, flightAll[i].dataValues.flight_price]);


        if (visitedSity.indexOf(airportTo.dataValues.airport_city) === -1)
            await Search(airportTo.dataValues.airport_city, flightAll[i].dataValues.flight_data_to, flightMas, visitedSity);
    }
}



module.exports = router;
