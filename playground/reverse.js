// THREE ways to reverse string. ouch :)

const string = "hello world";

// console.log(string[0]) // first char
// console.log(string[string.length-1]) // last char

// trick: convert string to array, reverse array, join array to string 
function reverseString(string) {
  // checking the sub parts of my crazy algorithm to find out why it is not working!
  const splitti = string.split("")
  const reversi = splitti.reverse()
  const reversedStr = reversi.join("")
  return reversedStr
  // oneliner code
  return string.split("").reverse().join("");
}
console.log(reverseString(string)); // dlrow olleh

// reverse by recursion => mindfuck :D
function reverseStringV2(str) {
  // EXIT condition
  if (str === "") {
    return ""; // turning point => here recursion tree stops and moves "upward" again
  }
  // extract first letter (will become the new LAST letter!)
  const firstChar = str.charAt(0);
  // take the rest of the string and pass it down (reversing it further...)
  const reversedRest = reverseString(str.substr(1));

  // here we SWAP continously the FIRST character to the LAST position
  const reversed = reversedRest + firstChar;
  return reversed;
}
console.log(reverseStringV2(string));


const reverseStringV3 = (str) => {
  const arr = str.split("");
  const arrReversed = arr.reverse();

  // Higher Order Functions (HOFs)
  // => forEach, map, filter, reduce, find
  // MOST important JS functions

  let strReversed = ""
  arrReversed.forEach((character) => {
    strReversed += character
  });
  return strReversed
}

console.log( reverseStringV2("hallo world") )
