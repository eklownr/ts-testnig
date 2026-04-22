interface DrinkType {
	name: string;
	price: number;
}

const drinks: DrinkType[] = [
	{ name: "Cappuccino", price: 3 },
	{ name: "Latte", price: 2 },
	{ name: "Americano", price: 2 },
	{ name: "Mocha", price: 2 },
];

// return drink type and price
export function createDrink(type: string): string {
	const drink = drinks.find((drink) => drink.name === type);
	if (!drink) return `${type} - sold out`;
	return `${drink?.name} - ${drink?.price}`;
}
