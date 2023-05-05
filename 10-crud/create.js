const books = [
  { name: "JS for Dummies", author: "Keine Ahnung" },
  { name: "Nordlicht im Tal der Trolle", author: "Marlien Falch" },
  { name: "Nordlicht aus dem Tal der Schlümpfe", author: "Marlien Falch" },
];

// adding items
const bookNew = { name: "Guide to Happiness 2.0", author: "Stephie" };

// 1. change ORIGINAL array
// books.push( bookNew )

// 2. change COPY of original array
const addBook = (books, book) => {
  const booksCopy = [...books];
  booksCopy.push(book);
  console.log(booksCopy);
};
addBook(books, bookNew);
