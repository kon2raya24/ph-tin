import { describe, it, expect } from "vitest";
import { generateRandomTIN } from "../generaterandomtin";

describe("generateRandomTIN", () => {
  it("should be a function", () => {
    expect(typeof generateRandomTIN).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => generateRandomTIN(null as any)).toThrow();
  });
});
