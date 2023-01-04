const { sortArrayAscending, sortArrayDescending } = require('../src/test2');

describe('sortArrayAscending', () => {
    test('sortArrayAscending function is defined', () => {
        expect(sortArrayAscending).toBeDefined();
    });

    test('sort array of integers in ascending order', () => {
        expect(sortArrayAscending([2, 3, 1])).toEqual([1, 2, 3]);
        expect(sortArrayAscending([5, 4, 9, 2, 1])).toEqual([1, 2, 4, 5, 9]);
    });

    test('sort array of negative integers in ascending order', () => {
        expect(sortArrayAscending([-3, -2, -1])).toEqual([-3, -2, -1]);
        expect(sortArrayAscending([-5, -4, -9, -2, -1])).toEqual([-9, -5, -4, -2, -1]);
    });

    test('sort empty array', () => {
        expect(sortArrayAscending([])).toEqual([]);
    });
})

describe('sortArrayDescending', () => {
    test('sortArrayDescending function is defined', () => {
        expect(sortArrayDescending).toBeDefined();
    });

    test('sort array of integers in descending order', () => {
        expect(sortArrayDescending([2, 3, 1])).toEqual([3, 2, 1]);
        expect(sortArrayDescending([5, 4, 9, 2, 1])).toEqual([9, 5, 4, 2, 1]);
    });

    test('sort array of negative integers in descending order', () => {
        expect(sortArrayDescending([-3, -2, -1])).toEqual([-1, -2, -3]);
        expect(sortArrayDescending([-5, -4, -9, -2, -1])).toEqual([-1, -2, -4, -5, -9]);
    });

    test('sort empty array', () => {
        expect(sortArrayDescending([])).toEqual([]);
    });
})
