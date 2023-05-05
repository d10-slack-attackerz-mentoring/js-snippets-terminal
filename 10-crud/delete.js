const books = [
  { id: "1", name: "JS for Dummies", author: "Keine Ahnung" },
  { id: "2", name: "Nordlicht im Tal der Trolle", author: "Marlien Falch" },
  { id: "3", name: "Nordlicht aus dem Tal der Schlümpfe", author: "Marlien Falch" },
];

// deleting by using filter

const idToDelete = "2"
const booksKeep = books.filter((book) => {
   return book.id !== idToDelete
})
console.log(booksKeep)

