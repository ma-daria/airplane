const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');

const  airport = sequelize.define('airport', {
    airport_name: {
        type: Sequelize.STRING(3000),
    },

    airport_city: {
        type: Sequelize.INTEGER,
    }
});

module.exports = airport;