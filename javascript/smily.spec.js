const { countSmilyFace } = require('./smily');

describe('odd-number', () => {
    it('in case of success', () => {
        const result = countSmilyFace([":)", ":(", ":>"])
        expect(result).toEqual(1);
    });

    it('in case of invalid input', () => {
        const result = countSmilyFace()
        expect(result).toEqual('Invalid input: input must be an array');
    });

    it('in case of an empty array return 0', () => {
        const result = countSmilyFace([]);
        expect(result).toEqual(0);
    });
});