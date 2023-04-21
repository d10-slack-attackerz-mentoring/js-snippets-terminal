const arr = [
  { name: "Zoo", seasons: 3 },
  { name: "Anne with an E", seasons: 3 },
  { name: "Vikings Walhalla", seasons: 4 },
  { name: "Southpark", seasons: 26 },
];

// CRUD Operation => READ / DISPLAY
for(let i=0; i<arr.length; i++) {
  console.log(`<div>${arr[i].name}, Seasons: ${arr[i].seasons}</div>`)
}

// DELETE
console.log(arr)

let search = "Vikings Walhalla" // INPUT FROM USER
for (let i = 0; i < arr.length; i++) {
  if( arr[i].name === search ) {
    console.log(i, arr[i])
    arr.splice(i, 1)
    // delete arr[i]; // deletes object, but leaves an empty space in the array 
    // (delete is typically used to delete a KEY from an object)
  }
}
console.log(arr)