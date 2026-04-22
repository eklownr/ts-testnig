import { createDrink } from "../coffeshop/createDrink";
import { describe, expect, it } from "vitest";

describe("test createDrink", () => {
	it("test createDrink Cappuccino", () => {
		expect(createDrink("Cappuccino")).toBe("Cappuccino - 3");
	});
	it("test createDrink Latte", () => {
		expect(createDrink("Latte")).toBe("Latte - 2");
	});
	it("test createDrink Americano", () => {
		expect(createDrink("Americano")).toBe("Americano - 2");
	});
	it("test createDrink Mocha", () => {
		expect(createDrink("Mocha")).toBe("Mocha - 2");
	});

	// make it fail and fix function to return "Lat - 0"
	it("#test createDrink to fail add Lat", () => {
		expect(createDrink("Lat")).toBe("Lat - sold out");
	});
	it("#test createDrink to fail add Mjölk", () => {
		expect(createDrink("Mjölk")).toBe("Mjölk - sold out");
	});
});
