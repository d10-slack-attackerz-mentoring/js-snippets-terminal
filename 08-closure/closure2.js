
const shop = () => {

  // private daten
  const db = [
    "haartrockner", "toaster", "cola"
  ]

  // functions for accessing or manipulating the data
  const printItems = () => {
    db.forEach((item, i) => console.log("Item:", item))
  }

  const addItem = (itemNew) => {
    console.log("Adding new item to our protected store: ", itemNew)
    db.push(itemNew.toLowerCase())
  }

  // share the PUBLIC stuff with the world
  // usually just the FUNCTIONS to change the data in the way we want
  // but we usually never share the DATA ITSELF
  return { addItem, printItems }
  // return [addItem, printItems], ALTERNATIVE: return all functions as array 
}

const shopFuncs = shop()
console.log(shopFuncs)
shopFuncs.printItems()
shopFuncs.addItem("COding BooK")
shopFuncs.addItem("Giesskanne")
shopFuncs.addItem("Fotoapparat")
shopFuncs.printItems()

