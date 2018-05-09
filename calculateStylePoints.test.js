const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', (styleNotes) => {
    describe('equal scores', () => {
        it('should return 3xsingle score', () => {

            const actual = calculateStylePoints([18,18,18,18,18]);

            const expected = 54;

            assert.equal(actual, expected);
        });
        it('should return sum of the 3 mid scores', () => {

            const actual = calculateStylePoints([18,18.5,17.5,18.5,18.5]);

            const expected = 55;

            assert.equal(actual, expected);
        });
    });

});