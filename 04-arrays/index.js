const arrFruits = ["banana", "cherry"];

// an array is an object. why do we know?

// because we can use the . after the variable name to reveal some functions

// [ ] = brackets, square brackets
console.log(arrFruits[0]); // array => access one item

arrFruits.push("mango"); // OPERATIONS => UPDATES / CHANGES der Variables
arrFruits.push("cherry");
// arrFruits.push("coconut")
console.log(arrFruits); // CHECK

// if I dont want to CHANGE something, but just wanna make a decision
// I can do this in one line often
console.log(
  arrFruits.length >= 5
    ? "Gut! Wir haben 5 Früchte! Wir dürfen nach Level 2"
    : "Ey! Reicht noch nicht! Geh nochmal in den Wald"
);
