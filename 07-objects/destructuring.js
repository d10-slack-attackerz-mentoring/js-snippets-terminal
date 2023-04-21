const product = {
  id: 1,
  title: "Hairdryer Harry",
  price: 19.99,
  quantity: 10,
  stockNo: "AZIX14",
  variants: ["basic", "premium"]
}

// desctructure => pluck out pieces of the object that we need right now!
// const { title, price } = product

// console.log(`<div>${product.title}: ${product.price}</div>`)
// console.log(`<div>${title}: ${price}</div>`)

/**
 * Function should get PRODUCT object as INPUT (Parameter)
 * Create a DIV from some subinfo
 * Return the DIV
 */
const productToDiv = (product) => {
  const { title, price } = product
  const div = `<div>${title}: ${price}</div>`
  return div
}

// destructure object INPUT directly
const productToDivV2 = ({ title, price }) => {
  const div = `<div>${title}: ${price}</div>`;
  return div;
};


// ??? log what was returned by that function ???
console.log( productToDivV2(product) )
// console.log(`<div>${product.title}: ${product.price}</div>`);