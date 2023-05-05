const books = [
  { name: "JS for Dummies", author: "Keine Ahnung" },
  { name: "Nordlicht im Tal der Trolle", author: "Marlien Falch" },
  { name: "Nordlicht aus dem Tal der Schlümpfe", author: "Marlien Falch" },
];

const search = "nordlicht"
const booksFiltered = books.filter((book) =>
  book.name.toLowerCase().includes(search.toLowerCase())
);


// map => changes every single item to something else

// Example: convert array items to DIV strings
const booksMapped = booksFiltered.map((book) => {
  return `<div>
      <span>${book.name}</span>
      <span>${book.author}</span>
    </div>`;
});

console.log(booksMapped);
