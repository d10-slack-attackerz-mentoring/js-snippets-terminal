const arrPizzas = [
  "Formaggi",
  "Funghi",
  "Potsdamer Stange",
  "Diavolo",
  "Salami",
  "Funghi",
];

// PATTERN für Code Logic
// FUNCTION
//  - LOOP
//    - IF ELSE / SWITCH CASE

// CODE LOGIC
// for (let i = 0; i < arrPizzas.length; i++) {
//   console.log("<div>" + arrPizzas[i] + "<div>");
// }

// Outsource code logic to function
// function convertPizzasToDivs() {
// }
// let convertPizzasToDivs = function () {
//   console.log("Blaaa");
// };

// the same with ARROW syntax
let convertPizzasToDivs = (pizzas) => {
  for (let i = 0; i < pizzas.length; i++) {
    console.log("<div>" + pizzas[i] + "<div>");
  }
};
// call the function and put the pizza array as INPUT (=argument/parameter)
convertPizzasToDivs(arrPizzas);

// from logic to function
// - Write the logic
// - Create the function
// - MOVE THE WORKING LOGIC INTO THE FUNCTION
// - Move all VARIABLES used inside the function to parameter