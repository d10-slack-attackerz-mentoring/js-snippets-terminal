let a = "a"

// passing a VALUE / COPY
const funky = (a) => {
  a = "b"
}

funky(a)
console.log(a) // original is UNCHANGED! 


// Object
const person = {
  name: "Marian",
  skillLevel: 100000
}

// if we pass an OBJECT or ARRAY => we always pass the ORIGINAL (=reference) 
const increaseSkill = (p) => {
  console.log(p)
  p.skillLevel++
}

increaseSkill(person)
console.log(person)
