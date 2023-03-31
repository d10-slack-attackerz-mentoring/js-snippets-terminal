                  // [ 0     ,    1    ,       2                 ,    3     ,    4    ]
const arrPizzas = ["Formaggi", "Funghi", "Potsdamer Stange", "Diavolo", "Salami", "Funghi"]

// if we know at which position (=index) our item is that we look for => we dont need a loop!
// const firstPizza = arrPizzas[2]
// console.log(firstPizza)
// console.log()

// Loope durch den ollen Array
for(let i=0; i<arrPizzas.length; i++) {
  console.log( arrPizzas[i] )
}

// Loope durch den Array und converte Daten in HTML
for(let i=0; i<arrPizzas.length; i++) {
  console.log( "<div>" + arrPizzas[i] + "<div>" )
}
console.log()

// SUCHE nach Item => wir wissen nicht, wo das f**** Item im Array ist!
const searchTerm = "Fung" // Fake INPUT from User

for (let i = 0; i < arrPizzas.length; i++) {
  const item = arrPizzas[i]; // store the current item we loop over in a variable
  // with if we can now CHECK an item => often used in searches
  // EXACT SEARCH
  if(item === searchTerm ) { // if(item??? === "Funghi")
    console.log("Found item", item, "at position", i)
  }
}


// ["Formaggi", "Funghi", "Potsdamer Stange", "Diavolo", "Salami", "Funghi"]
for(let i=0; i<arrPizzas.length; i++) {
  const item = arrPizzas[i] // store the current item we loop over in a variable
  // with if we can now CHECK an item => often used in searches
  // PATTERN SEARCH
  if (item.includes( searchTerm )) {
    console.log("Found item", item, "at position", i);
  }

}













