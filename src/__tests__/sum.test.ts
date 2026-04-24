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
});
