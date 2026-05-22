/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
// 1. filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];
let f=courses.filter((str)=>str.length>5)
console.log("Courses with name length> 5: ",f)

//2. map() to convert course names to uppercase
let m=courses.map((str)=>str.toUpperCase())
console.log("Course names to uppercase: ",m)

//3. reduce() to generate a single string:
let r=courses.reduce((acc,str)=>(acc+" | "+str).toUpperCase())
console.log("Single string: ",r)

//4. find() the course "react"
let s=courses.find((str)=>str==="react")
console.log("Finding the course 'react': ",s)

//5. findIndex() of "node"
let s1=courses.findIndex((str)=>str==="node")
console.log("Index of course 'node': ",s1)