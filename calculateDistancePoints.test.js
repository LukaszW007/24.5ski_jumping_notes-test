const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('hill size - normal', () => {
        it('should return jump longer than K point', () => {

            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
        it('should return jump shorter than K point',()=>{

            const actual = calculateDistancePoints(88,'normal', 98);

            const expected= 40;

            assert.equal(actual,expected);
        });
        it('should return jump equal to K point',()=>{

            const actual = calculateDistancePoints(98,'normal', 98);

            const expected= 60;

            assert.equal(actual,expected);
        })
    });
    // describe()

});