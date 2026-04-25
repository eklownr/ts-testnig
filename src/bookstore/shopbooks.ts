interface bookType {
	title: string;
	author?: string; // optional
	price: string;
}

export const BookExist = {
	"sold out": "sold out",
	"not in store": "not in store",
} as const;

const books: bookType[] = [
	{ title: "Dune", author: "David Lynch", price: "3" },
	{ title: "We", author: "Yevgeny Zamyatin", price: "4" },
	{ title: "1Q84", author: "Haruki Murakami", price: "2" },
	{ title: "1984", author: "George Orwell", price: "6" },
];

// return book title, author and price
export function findBook(title: string): bookType {
	const book: bookType | undefined = books.find(
		(book) => book.title === title,
	);
	if (!book)
		return {
			title: title,
			author: BookExist["not in store"],
			price: BookExist["sold out"],
		};
	return book;
}

export function reservStock(title: string): number {
	console.log(`Reserving your book ${title}`);
	const ticket: number = Math.floor(Math.random() * 999);
	console.log(`Your reservation ticket: ${ticket}`);
	return ticket;
}

export function confirmPurchase(ticket: number, amount: number): boolean {
	if (amount <= 0) return false;
	if (ticket <= 0 || ticket > 999) throw new Error("Invalid ticket number");
	console.log(`Processing payment for ticket ${ticket} for ${amount} €`);
	return true;
}

export function buyBook(title: string): boolean {
	// combine all functions
	const bookTitle: bookType = findBook(title);
	if (bookTitle.author === BookExist["not in store"]) return false;

	const ticket = reservStock(bookTitle.title);

	confirmPurchase(ticket, Number(bookTitle.price));

	console.log(
		`Serving your ${title} on ticket ${ticket} pric ${bookTitle.price} €`,
	);
	return true;
}
