import { describe, it, expect } from "vitest";
import { validateTIN } from "../validatetin";

describe("validateTIN", () => {
  it("should be a function", () => {
    expect(typeof validateTIN).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validateTIN(null as any)).toThrow();
  });
});
