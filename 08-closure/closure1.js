let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// problem => our data is PUBLIC (counter is a global variable here). 
// Everyone can access it in any way, manipulating it. 
// Often we don't want that and PROTECT the data so it can just be changed in a way WE want it to be changed
counter++

console.log(counter)
