const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');

const  flight = sequelize.define('flight', {
    flight_airport_from: {
        type: Sequelize.INTEGER,
    },

    flight_data_from: {
        type: Sequelize.DATE,
    },

    flight_airport_to: {
        type: Sequelize.INTEGER,
    },

    flight_data_to: {
        type: Sequelize.DATE,
    },

    flight_price: {
        type: Sequelize.DOUBLE(10, 2)
    }

});

module.exports = flight;