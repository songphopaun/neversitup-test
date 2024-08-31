const { manipulate } = require('./manipulate');

describe('manipulate', () => {
    it('in case of success', () => {
        const result = manipulate('abc') 
        expect(result).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    });

    it('in case of success when repeated character and remove duplicates ', () => {
        const result = manipulate('aabb')
        expect(result).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });

    it('in case of success when permute a single character string', () => {
        const result = manipulate('a');
        expect(result).toEqual(['a']);
    });
});