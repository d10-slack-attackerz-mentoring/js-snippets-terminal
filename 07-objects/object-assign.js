let character = {
  name: "Marian",
  health: 100,
  strength: 150,
  weapons: ["handgun", "machine gun", "grenade launcher"]
}

// add some NEW properties
character.poisoned = false

const newProperties = {
  strength: 151,  
  poisoned: true,
  experience: 77  
}

// Object assign => merges (!) another object with its properties into an object 
// => add news properties
// => udates existing (!) properties
Object.assign(character, newProperties)
console.log(character)