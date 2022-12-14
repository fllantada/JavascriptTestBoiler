import Challenge from "./index";

describe("Challenge", () => {
  it("should return the correct result", () => {
    const result = Challenge(7362);
    expect(result).toBe("2h1m");
  });

  it("should return the correct result", () => {
    const result = Challenge(100);
    expect(result).toBe("1m40s");
  });

  it("should return the correct result", () => {
    const result = Challenge(5);
    expect(result).toBe("5s");
  });
});
