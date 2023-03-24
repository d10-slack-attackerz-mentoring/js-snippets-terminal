// USER ACTION => logged in or out

let loggedIn = false

// ternary
console.log( loggedIn ? "Logged In" : "Not logged in" )

// User logged in via the UI
loggedIn = true

console.log(loggedIn ? "Logged In" : "Not logged in");

// if else
// if else is better than ternary in case we wanna do MULTIPLE things in case of true or false
let loginAttempts = 0
if(loggedIn) {
  console.log("Logged in")  
  loginAttempts++
}
else {
  console.log("Logged out");  
  loginAttempts++
}

console.log("Hallo Freund, du hast dich so oft heute eingeloggt:", loginAttempts)
console.log() // Leerzeile / empty line


// item => can be a fruit or a vegetable (=Gemüse)
let item = "banana"

if(item === "banana") {
  console.log("Banana ist Obst!")
}
else if(item === "cherry") {
  console.log("Cherry ist Objst")
}
else if(item === "cucumber") {
  console.log("Gurke ist Gemüse!")
}
// ERROR case
else {
  console.log("EY! Das Ding kenn ich nicht!")
}


item = "cucumber"
if (item === "banana") {
  console.log("Banana ist Obst!");
} 
if (item === "cherry") {
  console.log("Cherry ist Objst");
}
if (item === "cucumber") {
  console.log("Gurke ist Gemüse!");
}
// ERROR case
else {
  console.log("EY! Das Ding kenn ich nicht!");
}
