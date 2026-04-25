// return sum of the numbers-list
export default function sum(...numbers: number[]) {
	// Kontrollera varje argument – om något inte är ett nummer, kasta fel
	for (const num of numbers) {
		if (typeof num !== "number" || Number.isNaN(num)) {
			throw new Error(`not a valid number`);
		}
	}

	// Om alla är giltiga tal, returnera summan
	return numbers.reduce((tot, num) => tot + num, 0);
}
