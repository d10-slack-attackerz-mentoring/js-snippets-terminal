const arrPizzas = [
  "Formaggi",
  "Funghi",
  "Potsdamer Stange",
  "Diavolo",
  "Salami",
  "Funghi",
];

// Pizza search function
const searchPizzas = (arrPizzas, searchTerm) => {

  // LOGIC for a search in an array
  for (let i = 0; i < arrPizzas.length; i++) {
    const item = arrPizzas[i]; // store the current item we loop over in a variable
    // with if we can now CHECK an item => often used in searches
    // EXACT SEARCH
    if (item.includes(searchTerm)) {
      // if(item??? === "Funghi")
      console.log("Found item", item, "at position", i);
    }
  }
};


searchPizzas(arrPizzas, "maggi") // User search 1
searchPizzas(arrPizzas, "Dia") // User search 2
searchPizzas(arrPizzas, "Stange") // User search 3

