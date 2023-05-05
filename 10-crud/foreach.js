const books = [
  { name: "JS for Dummies", price: 1, author: "Keine Ahnung" },
  { name: "Nordlicht im Tal der Trolle", price: 2, author: "Marlien Falch" },
  { name: "Nordlicht aus dem Tal der Schlümpfe", price: 2.5, author: "Marlien Falch" },
];

// increase all book prices by 50%
books.forEach((book) => {
  if(book.name == "JS for Dummies")
    book.price++
})
// console.log(books)

const result = []
books.forEach((book) => {
  if(book.author == "Marlien Falch") {
    result.push(book)
  }
})

console.log(result)