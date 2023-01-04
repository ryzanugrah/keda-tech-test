const printNumbers = require('../src/test1')

describe('printNumbers', () => {
    test("returns 15 values", () => {
        const log = jest.spyOn(console, "log").mockImplementation(() => { });

        printNumbers(15);

        expect(log).toHaveBeenNthCalledWith(1, 1);
        expect(log).toHaveBeenNthCalledWith(2, 2);
        expect(log).toHaveBeenNthCalledWith(3, "fish");
        expect(log).toHaveBeenNthCalledWith(4, 4);
        expect(log).toHaveBeenNthCalledWith(5, "bash");
        expect(log).toHaveBeenNthCalledWith(6, "fish");
        expect(log).toHaveBeenNthCalledWith(7, 7);
        expect(log).toHaveBeenNthCalledWith(8, 8);
        expect(log).toHaveBeenNthCalledWith(9, "fish");
        expect(log).toHaveBeenNthCalledWith(10, "bash");
        expect(log).toHaveBeenNthCalledWith(11, 11);
        expect(log).toHaveBeenNthCalledWith(12, "fish");
        expect(log).toHaveBeenNthCalledWith(13, 13);
        expect(log).toHaveBeenNthCalledWith(14, 14);
        expect(log).toHaveBeenNthCalledWith(15, "fish bash");
    });
})
