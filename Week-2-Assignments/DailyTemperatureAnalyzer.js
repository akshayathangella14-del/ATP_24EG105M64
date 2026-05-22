/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
// 1. filter() temperatures above 35
const temperatures=[32,35,28,40,38,30,42];
let f=temperatures.filter((element)=>element>35)
console.log("Temperatures above 35: ",f);

//2. map() to convert all temperatures from Celsius → Fahrenheit
let m=temperatures.map((element)=>
    element=((9*element)/5)+32)
console.log("Temperatures in Fahrenheit: ",m)

//3. reduce() to calculate average temperature
let sum=temperatures.reduce((acc,element)=>acc+element)
let avg=sum/temperatures.length
console.log("Average temperatures: ",avg)

//4. find() first temperature above 40
let e=temperatures.find((element)=>element>40)
console.log("First Temperature above 40: ",e)

//5. findIndex() of temperature 28
let e1=temperatures.findIndex((element)=>element===28)
console.log("Index of Temperature 28: ",e1)








