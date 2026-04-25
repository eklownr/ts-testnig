import { describe, expect, it } from "vitest";
import sum from "../sum.ts";

describe("Sum value from list.", () => {
	it("test sum 0.", () => {
		expect(sum()).toBe(0);
	});
	it("test list 1,2,3,4=10", () => {
		expect(sum(1, 2, 3, 4)).toBe(10);
	});
	it("test singel number", () => {
		expect(sum(4)).toBe(4);
	});
	it("test sum -2.", () => {
		expect(sum(-2)).toBe(-2);
	});
	it("test sum -2,-3,-4.", () => {
		expect(sum(-2, -3, -4)).toBe(-9);
	});
	it("test sum a,b,c.", () => {
		expect(() => sum("a", "b", "c")).toThrowError("not a valid number");
	});
});
