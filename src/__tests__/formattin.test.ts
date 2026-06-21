import { describe, it, expect } from "vitest";
import { formatTIN } from "../formattin";

describe("formatTIN", () => {
  it("should be a function", () => {
    expect(typeof formatTIN).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatTIN(null as any)).toThrow();
  });
});
