const Flight = require('../models/flight');
const Airport = require('../models/airport');
const City = require('../models/city');
const Country = require('../models/country');

Country.hasMany(City, { foreignKey: 'city_country', sourceKey: 'id', onDelete: 'restrict', onUpdate: 'restrict'});
City.belongsTo(Country, { foreignKey: 'city_country', targetKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' });

City.hasMany(Airport, { foreignKey: 'airport_city', sourceKey: 'id', onDelete: 'restrict', onUpdate: 'restrict'});
Airport.belongsTo(City, { foreignKey: 'airport_city', targetKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' });

Airport.hasMany(Flight, { foreignKey: 'flight_airport_from', sourceKey: 'id', onDelete: 'restrict', onUpdate: 'restrict'});
Flight.belongsTo(Airport, { as: 'airport_from', foreignKey: 'flight_airport_from', targetKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' });

Airport.hasMany(Flight, { foreignKey: 'flight_airport_to', sourceKey: 'id', onDelete: 'restrict', onUpdate: 'restrict'});
Flight.belongsTo(Airport, { as: 'airport_to', foreignKey: 'flight_airport_to', targetKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' });


async function init () {
//     await Country.sync({force:true});
//     await City.sync({force:true});
//     await Airport.sync({force:true});
//     await Flight.sync({force:true});

    await Country.sync();
    await City.sync();
    await Airport.sync();
    await Flight.sync();
}

(async function f () {
    await init()
})();