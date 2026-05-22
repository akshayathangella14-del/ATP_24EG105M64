//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

function findSum(...numbers){
    let sum=numbers.reduce((acc,element)=>acc+element)
    console.log(sum)
}
findSum(10,20,30,40)
