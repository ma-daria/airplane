function Dijkstra(flightMas, cityFrom, cityTo){
    let visitedCity = {};
    let wayToCity = {};
    let priceToCity = {};

    let quantityCity = QuantityCity(flightMas);
    let vertices = cityFrom;
    wayToCity[cityFrom] = [];
    priceToCity[cityFrom] = 0;
    do{
        visitedCity[vertices] = true;
        for(let i = 0; i < flightMas.length; i++){
            if (visitedCity[flightMas[i][2]] === undefined){
                if ((priceToCity[flightMas[i][2]] === undefined) || (priceToCity[flightMas[i][2]] > priceToCity[flightMas[i][1]] + flightMas[i][3] )){
                    priceToCity[flightMas[i][2]] = priceToCity[flightMas[i][1]] + flightMas[i][3];
                    // let wayFrom = wayToCity[flightMas[i][1]];
                    let wayFrom = Object.assign([], wayToCity[flightMas[i][1]]);
                    wayFrom.push(flightMas[i][0]);
                    wayToCity[flightMas[i][2]] = wayFrom;
                }
            }
        }
        vertices = IDMinPrice(priceToCity);
    }while (Object.keys(visitedCity).length + 1 === quantityCity);
    return [wayToCity[cityTo], priceToCity[cityTo]];
}

/**
 * @return {number}
 */
function QuantityCity(flightMas){
    let visit = {};
    for(let i = 0; i < flightMas.length; i++){
        if (visit[flightMas[i][1]] === undefined){
            visit[flightMas[i][1]] = true;
        }
    }
    for(let i = 0; i < flightMas.length; i++){
        if (visit[flightMas[i][2]] === undefined){
            visit[flightMas[i][2]] = true;
        }
    }
    return Object.keys(visit).length;
}

/**
 * @return {number}
 */
function IDMinPrice(priceToCity){
    let min = Object.keys(priceToCity)[0];
    let minID = 0;
    for (let key in priceToCity){
        if (priceToCity[key] < min ){
            min = priceToCity[key];
            minID = key;
        }
    }
    return minID;
}

module.exports.Dijkstra = Dijkstra;