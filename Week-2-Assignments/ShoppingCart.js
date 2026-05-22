/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
 */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Use filter() to get only inStock products
let f=cart.filter((cartObj)=>cartObj.inStock===true)
console.log("Only instock products: ",f)

//2. Use map() to create a new array with:  { name, totalPrice }
let m=cart.map((cartObj)=>[cartObj.name,cartObj.price])
console.log("New array with name and price: ",m) 

//3. Use reduce() to calculate grand total cart value
let r=cart.reduce((acc,cartObj)=>acc+cartObj.price,0)
console.log("Grand total: ",r)

//4. Use find() to get details of "Mouse"
let f1=cart.find((cartObj)=>cartObj.name==="Mouse")
console.log("Details of 'Mouse': ",f1)

//5. Use findIndex() to find the position of "Keyboard"
let f2=cart.findIndex((cartObj)=>cartObj.name==="Keyboard")
console.log("Position of 'Keyword': ",f2)