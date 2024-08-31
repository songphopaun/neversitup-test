const { findOddNumber } = require('./odd-number');

describe('odd-number', () => {
    it('in case of success', () => {
        const result = findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
        expect(result).toEqual('should return 4, because it appears 1 time (which is odd).');
    });

    it('in case of no integer that appears an odd number of times', () => {
        const result = findOddNumber([1, 1])
        expect(result).toEqual('There is no integer that appears an odd number of times');
    });

    it('in case of error when permute a single character string', () => {
        const result = findOddNumber([1, 2]);
        expect(result).toEqual('There should be only one integer that appears.');
    });
});