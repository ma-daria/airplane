const assert = require('assert');
const Dijkstra = require('../algorithm/Dijkstra');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            let flightMas =[ [ 1, 2, 4, 2 ],
                [ 2, 4, 2, 2 ],
                [ 3, 4, 7, 2 ],
                [ 5, 7, 1, 3 ],
                [ 14, 1, 5, 10 ],
                [ 6, 4, 6, 4 ],
                [ 7, 6, 7, 4 ],
                [ 8, 6, 1, 6 ],
                [ 9, 2, 6, 3 ],
                [ 10, 2, 3, 4 ],
                [ 11, 3, 1, 4 ],
                [ 12, 2, 8, 6 ],
                [ 13, 8, 5, 7 ] ];
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 2 ,1)), String([[2, 4, 7, 1], 7]));

        });
    });
});