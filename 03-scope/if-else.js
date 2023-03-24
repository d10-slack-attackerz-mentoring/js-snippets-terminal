
// PUBLIC SPACE (SCOPE)
let money = 1000000

// Gebäude 
if(true) {
  console.log(money)
}

// Resident Evil Mansion
// variables defined with let or const are ONLY valid in the block where they were created
// block = { }
if(true) {
  // private area
  let beer = "Potsdamer Stange" // this variable here is no in SCOPE of the IF BLOCK
  var beer = "Potsdamer Stange" // HOSTING (= hoist => nach oben ziehen)
}

// can we grab that beer in the public area???
console.log(beer)