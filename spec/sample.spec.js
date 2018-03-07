//Unit test
describe("Sample Test", function () {
        it("sample test for equality", function () {
            expect(3).toBe(4);
        });
        it("sample test for equality", function () {
            expect(4).toBe(4);
        });
});
describe("Sample Error Test", function () {
    it("sample test for throwing error", function () {
        var sample = function () {
            throw new TypeError("Sample Error");
        };
        expect(sample()).toThrowError(TypeError,"Sample Error");
        // expect(sample()).toThrowError(TypeError);
        // expect(sample()).toThrowError("Sample Error");
    });
});


