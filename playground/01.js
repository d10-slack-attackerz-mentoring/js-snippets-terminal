// ALT+Z
/*
5. This question has 2 parts 
Part a) write a function named `printIfDivisibleByTen` that takes in a number and prints a `"Even 10!"` to the console if the number is evenly divisible by 10. 
FUNCTION: printIfDivisibleByTen
INPUT: Number 
OUTPUT: no return, just console log!
LOGIC / PSEUDO CODE: IF number teilbar durch 10 THEN console logge Even 10! ELSE nix machen


Examples: - printIfDivisibleByTen(1) --> no output - printIfDivisibleByTen(2) --> no output - printIfDivisibleByTen(32) --> no output - printIfDivisibleByTen(10) --> "Even 10!" into the console - printIfDivisibleByTen(30) --> "Even 10!" into the console - printIfDivisibleByTen(90000) --> "Even 10!" into the console 

Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number (=i).
LOGIC / PSEUDO CODE: LOOPE VON 1 bis 125 => und rufe immer printIfDivisibleByTen(i) auf

Part c) write a function that calls our function printIfDivisibleByTen X times
Use the current iteration number as input. Provide the amount of times the function calls the function printIfDivisibleByTen as input parameter 

Part d)
Write a function sumUp that get a number as input. It should loop from 0 to that number,
adding up all the numbers and return that number. 
FUNCTION: sumUp => const sumUp = () => {}
INPUT: limit (number)  => determines how often i will use the loop
OUTPUT: number => sum of all the numbers from 0 bis limit
Examples:
const a = sumUp(0) // 0
const b = sumUp(3) // 0..3 => 0+1+2+3 => 6
const c = sumUp(5) // 1+2+3+4+5 => 15
console.log(c)

*/


// PART A)

// LOGIC
// let num = 20
// console.log("Starting here")
// if(num % 10 === 0 ) {
//   console.log("Even 10!", num);
// }
// console.log()



// takes in a number / string / boolean => INPUT parameter
const printIfDivisibleByTen = (num) => {
  // LOGIC
  if(num % 10 === 0 ) {
    console.log("Even 10!", num);
  }
  // return => usually not needed if we just PRINT OUT something in the function
}

// TEST CASES => checks if my function works
printIfDivisibleByTen(1) 
printIfDivisibleByTen(2)
printIfDivisibleByTen(10)
printIfDivisibleByTen(30)
printIfDivisibleByTen(32)
printIfDivisibleByTen(9000)

console.log()

// PART B
for(let i=1; i<=125; i++) {
  printIfDivisibleByTen(i)
}


console.log()
// PART C
const callMyFunctionXTimes = (max) => {
  for (let i = 1; i <= max; i++) {
    printIfDivisibleByTen(i);
  }
}
callMyFunctionXTimes(105)

// PART 4

const sumUp = (limit) => {
  // LOGIC
  let sum = 0; // Declare OUTPUT Variable BEFORE LOop
  for(let i=0; i<=limit; i++) {
    // build up result variable inside loop
    sum+=i
  }
  // return the built up result
  return sum
}

console.log()

// store returned values from function in variable
const a = sumUp(1) // 1
const b = sumUp(2) // 3
const c = sumUp(3) // 6
const d = sumUp(5) // 15

// alternative: directly console log the return value
// console.log( sumUp(5) ) // 15


console.log(a)
console.log(b)
console.log(c)
console.log(d)