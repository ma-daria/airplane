const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');

const  city = sequelize.define('city', {
    city_name: {
        type: Sequelize.STRING(3000),
    },

    city_country: {
        type: Sequelize.INTEGER,
    }
});

module.exports = city;