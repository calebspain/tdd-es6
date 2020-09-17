import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('returns true if both words contain the same letters', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.deep.equal(expected);
    });

    it('returns false if both words do not contain the same letters', () => {
        const expected = true;
        const actual = isAnagram('testin', 'silent');
        expect(actual).to.deep.equal(expected);
    });
});