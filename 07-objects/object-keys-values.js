const arr = [
  { name: "Zoo", seasons: 3 },
  { name: "Anne with an E", seasons: 3 },
  { name: "Vikings Walhalla", seasons: 4 },
  { name: "Southpark", seasons: 26 },
];

// we get an array of the LABELS / keys of each object
// example use case => generate a table header with all the fields
console.log( Object.keys(arr[0]))

// just grab the values from the object
// example use case => print the values to a table row
console.log( Object.values(arr[0]))

console.log()


let post = {
  title: "Yadda Yadda",
  date: "2021-10-21",
  author: "Rob",
  text: "Yay, title says it all. Dolores esse sit aut modi molestiae non. Porro",
};

// with bracket notation we can access some info of the object
// DYNAMICALLY => often means: The USER chooses somehow what he / she wants
const userKey = "author"
console.log(post[userKey])

// example 1: if we KNOW where and how to display each field in HTML
// we would do it like this
const div = `
  <div class="title">${post.title}</div>
  <div class="date-author">${post.date} ${post.author}</div>
  <div class="text">${post.text}</div>`


// example 2: if we dont care about order and formatting, just printing all out,
// we can use looping over the object (for...in)
for(const key in post) {
  console.log(`<div>${key}: ${post[key]}</div>`)
}
