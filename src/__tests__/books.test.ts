import { describe, expect, it } from "vitest";
import {
	buyBook,
	confirmPurchase,
	findBook,
	reservStock,
} from "../bookstore/shopbooks";
import { BookExist } from "../bookstore/shopbooks";

describe("Book store tests", () => {
	it("# test find book", () => {
		expect(findBook("Dune")).toStrictEqual({
			title: "Dune",
			author: "David Lynch",
			price: "3",
		});
	});

	it("# test find book 1984", () => {
		expect(findBook("1984")).toStrictEqual({
			title: "1984",
			author: "George Orwell",
			price: "6",
		});
	});

	it("# test Fail find book 1888", () => {
		expect(findBook("1888")).toStrictEqual({
			title: "1888",
			author: BookExist["not in store"],
			price: BookExist["sold out"],
		});
	});
	/*
	it("test createDrink Mocha", () => {
		expect(createDrink("Mocha")).toStrictEqual({
			name: "Mocha",
			price: "6",
		});
	});

	// make it fail and fix function to return "Lat - 0"
	it("#test createDrink to fail add Lat", () => {
		expect(createDrink("Lat")).toStrictEqual({
			name: "Lat",
			price: "sold out",
		});
	});
	it("#test createDrink to fail add Mjölk", () => {
		expect(createDrink("Mjölk")).toStrictEqual({
			name: "Mjölk",
			price: "sold out",
		});
	});

	*/
});

describe("Reserv a book and get ticket number", () => {
	it("test resere book Dune", () => {
		expect(reservStock("Dune")).toBeTypeOf("number");
	});
	it("test reserv book 1984 < 1000", () => {
		expect(reservStock("1984")).toBeLessThan(1000);
	});
	it("test reserv book 1984 > -1", () => {
		expect(reservStock("1984")).toBeGreaterThan(-1);
	});
});

describe("confirmpurcase of books", () => {
	it("** test confirm book Dune", () => {
		expect(confirmPurchase(1, 3)).toBe(true);
	});
	it("** test confirm purchase fail", () => {
		expect(() => confirmPurchase(1000, 2)).toThrowError(
			"Invalid ticket number",
		);
	});
});

// integration test
describe("#test Buy book integration test", () => {
	it("test buy book dune", () => {
		expect(() => buyBook("dune")).not.toThrowError();
	});
	it("test buy book Dune true", () => {
		expect(buyBook("Dune")).toBe(true);
	});
	it("test buy book NotExist true", () => {
		expect(buyBook("NotExist")).toBe(false);
	});
});
