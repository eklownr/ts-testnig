import { createDrink } from "../coffeshop/createDrink";
import { describe, expect, it } from "vitest";

describe("test createDrink", () => {
	it("test createDrink", () => {
		expect(createDrink("Cappuccino")).toBe("Cappuccino - 3");
		expect(createDrink("Latte")).toBe("Latte - 2");
		expect(createDrink("Americano")).toBe("Americano - 2");
		expect(createDrink("Mocha")).toBe("Mocha - 2");
	});
	// make it fail and fix function to return "Lat - 0"
	it("test createDrink to fail", () => {
		expect(createDrink("Lat")).toBe("Lat - sold out");
	});
	it("test createDrink to fail", () => {
		expect(createDrink("Mjölk")).toBe("Mjölk - sold out");
	});
});
