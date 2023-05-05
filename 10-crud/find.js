const books = [
  { name: "JS for Dummies", author: "Keine Ahnung" },
  { name: "Nordlicht im Tal der Trolle", author: "Marlien Falch" },
  { name: "Nordlicht aus dem Tal der Schlümpfe", author: "Marlien Falch" },
];

const search = "nordLiCHt";

const resultFind = books.find((book) => {
  // in filter functio nwe always need to make a CHECK on each item => either IF or ternary
  if (book.name.toLowerCase().includes(search.toLowerCase())) {
    return true; // return the found book
  }
});
console.log(resultFind);
