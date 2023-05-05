const books = [
  { name: "JS for Dummies", quantity: 3, price: 1 },
  { name: "Nordlicht im Tal der Trolle", quantity: 2, price: 2 },
  {
    name: "Nordlicht aus dem Tal der Schlümpfe", quantity: 1,
    price: 2.5,
  },
];

// sum up something with forEach
// 2+1+1 => 4
let totalItems = 0
books.forEach((book) => {
  totalItems+= book.quantity
})
console.log({totalItems})

// sum up something with reduce (same as above, just more complicated)
const result = books.reduce((totalItems, book) => {
  return totalItems + book.quantity
  // totalItems += book.price
  // console.log(book.quantity, totalItems)
  // return totalItems
}, 0)

console.log(result)

