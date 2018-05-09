const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe ('hill size',()=> {
        describe('hill size - normal', () => {
            it('should return jump longer than K point', () => {

                const actual = calculateDistancePoints(111, 'normal', 98);

                const expected = 86;

                assert.equal(actual, expected);
            });
            it('should return jump shorter than K point', () => {

                const actual = calculateDistancePoints(88, 'normal', 98);

                const expected = 40;

                assert.equal(actual, expected);
            });
            it('should return jump equal to K point', () => {

                const actual = calculateDistancePoints(98, 'normal', 98);

                const expected = 60;

                assert.equal(actual, expected);
            })
        });
        describe('hill size - big', () => {
            it('should return jump longer than K point', () => {

                const actual = calculateDistancePoints(134, 'big', 120);

                const expected = 85.2;

                assert.equal(actual, expected);
            });
            it('should return jump shorter than K point', () => {

                const actual = calculateDistancePoints(113, 'big', 120);

                const expected = 47.4;

                assert.equal(actual, expected);
            });
            it('should return jump equal to K point', () => {

                const actual = calculateDistancePoints(120, 'big', 120);

                const expected = 60;

                assert.equal(actual, expected);
            })
        });
        describe('hill size - mammut', () => {
            it('should return jump longer than K point', () => {

                const actual = calculateDistancePoints(227.5, 'mammut', 200);

                const expected = 153;

                assert.equal(actual, expected);
            });
            it('should return jump shorter than K point', () => {

                const actual = calculateDistancePoints(199, 'mammut', 200);

                const expected = 118.8;

                assert.equal(actual, expected);
            });
            it('should return jump equal to K point', () => {

                const actual = calculateDistancePoints(200, 'mammut', 200);

                const expected = 120;

                assert.equal(actual, expected);
            })
        });
    });
});