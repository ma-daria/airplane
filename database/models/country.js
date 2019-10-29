const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');

const  country = sequelize.define('country', {
    country_name: {
        type: Sequelize.STRING(3000),
    }
});

module.exports = country;