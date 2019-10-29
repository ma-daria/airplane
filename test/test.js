const assert = require('assert');
const Dijkstra = require('../algorithm/Dijkstra');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('test1', function() {
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
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 2 ,1)), String([[1, 3, 5], 7]));
        });

        it('test2', function() {
            let flightMas =[ [ 1, 1, 2, 1 ],
                            [ 2, 2, 3, 4 ],
                            [ 3, 1, 4, 2 ],
                            [ 5, 2, 4, 3 ],
                            [ 14, 4, 2, 2 ],
                            [ 6, 4, 3, 3 ]];
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 1 ,3)), String([[1, 2], 5]));
        });

        it('test3', function() {
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
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 2 ,5)), String([[12, 13], 13]));
        });

        it('test4', function() {
            let flightMas =[ [0, 1, 4, 1],
                            [1, 4, 8, 3],
                            [2, 8, 10, 10],
                            [3, 1, 3, 1],
                            [4, 3, 4, 3],
                            [5, 3, 5, 4],
                            [6, 5, 9, 2],
                            [7, 1, 2, 1],
                            [8, 2, 9, 4],
                            [9, 2, 6, 2],
                            [10, 6, 7, 4],
                            [11, 7, 8, 7]];
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 1 ,10)), String([[0, 1 , 2], 14]));
        });

        it('test4', function() {
            let flightMas =[ [0, 1, 4, 1],
                            [1, 4, 8, 3],
                            [2, 8, 10, 10],
                            [3, 1, 3, 1],
                            [4, 3, 4, 3],
                            [5, 3, 5, 4],
                            [6, 5, 9, 2],
                            [7, 1, 2, 1],
                            [8, 2, 9, 4],
                            [9, 2, 6, 2],
                            [10, 6, 7, 4],
                            [11, 7, 8, 7]];
            assert.equal(String(Dijkstra.Dijkstra(flightMas, 1 ,9)), String([[7, 8], 5]));
        });
    });
});