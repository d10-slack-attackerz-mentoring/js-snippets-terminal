const books = [
  { name: "JS for Dummies", author: "Keine Ahnung" },
  { name: "Nordlicht im Tal der Trolle", author: "Marlien Falch" },
  { name: "Nordlicht aus dem Tal der Schlümpfe", author: "Marlien Falch" },
];

const search = "nordLiCHt";

// short variante
// wenn wir nach dem arrow => keine curly braces benutzen, 
// RETURNED JavaScript automatisch das Result der nächsten Zeile
const resultFilter = books.filter((book) =>
  book.name.toLowerCase().includes(search.toLowerCase())
);

// lange variante mit IF check
// const resultFilter = books.filter((book) => {
  // in filter function we always need to make a CHECK on each item => either IF or ternary
  // if (book.name.includes(search)) {
  //   return true
  // }
// });
console.log(resultFilter);
