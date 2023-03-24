// var a,b,c; // DECLARATION
// var a = "a"; // HOISTING (=> )
// let str1, str2, str3; // let allows multiple declarations

const str = "hallo"; // const needs IMMEDIATELY a value for initialization
console.log(str);

let a = "hallo"
let b = "ihr"
let c = "da"

let price = 17

console.log(price)
price = price + 8 // 17 + 8
// price += 8; // price = price + 8
console.log(price)
// console.log({ price })
// price + 8
// console.log(price + 8)


// console.log({ a })
// console.log({ b })
// console.log({ c })

let stri = "hallo"
stri = 80
console.log(stri)

let i = 10

// 3 ways of incrementing a number variable 
i++ // i = i + 1 
// i += 1 // preferred way if we wanna add more than one
// i = i + 1 // also possible, but a bit unusual
console.log({i}) // increment operator => plus 1!
// console.log(i+10) // Operation ohne Effekt

// 1. DECLARATION
// 2. OPERATION (=> Variable updaten / changen)
// 3. CHECK => console.log

const numby = 99.95
const stringy = "EUR"

const strNumby = numby + " " + stringy // 10 + "charles" => "10charles" (= string concatenation)
console.log( { strNumby })

const numbA = 10
const numbB = "10"

const result = numbA + numbB  // 10 + "10" => 1010
console.log({ result }) // ???

// const result2 = numbA + paseInt(numbB) // paseInt(str) => parst eine Number aus dem String raus, wenn möglich!
const result2 = numbA + Number(numbB) // Number(str) => wandelt string in number um
console.log({ result2 }) 

// String functions

// 1 DECLARATIONS
const strPizza = "Quattro Formaggi"
const strSearch = "maggi"

// 2 OPERATIONS => store result in variable
const resultSearch = strPizza.includes(strSearch) // true / false

// 3. CHECK if operation correct => console.log
console.log({ resultSearch })


