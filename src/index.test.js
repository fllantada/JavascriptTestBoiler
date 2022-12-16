const mustBe5 = require("./index");

describe("Must be 5 the function mustBe5", () => {
  it("should return the correct result", () => {
    const result = mustBe5();
    expect(result).toBe(5);
  });
});
