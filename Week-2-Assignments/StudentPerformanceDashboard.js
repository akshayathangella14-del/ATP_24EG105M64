/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
 */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1. filter() students who passed (marks ≥ 40)
let f=students.filter((studentObj)=>studentObj.marks>=40)
console.log("Students who passed (marks ≥ 40): ",f)

/*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D */
let m=students.map((studentObj)=>{
    if(studentObj.marks>=90)
        studentObj.grade="A"
    else if(studentObj.marks>=75)
        studentObj.grade="B"
    else if(studentObj.marks>=60)
        studentObj.grade="C"
    else
        studentObj.grade="D"
    return {id: studentObj.id,name:studentObj.name,marks:studentObj.marks,grade:studentObj.grade}
}) 
console.log("Adding grade field: ",m)    

//3. reduce() to calculate average marks
let r=students.reduce((acc,studentObj)=>acc+studentObj.marks,0)
let avg=r/students.length
console.log("Average marks: ",avg)

//4. find() the student who scored 92
let f1=students.find((studentObj)=>studentObj.marks===92)
console.log("Student who scored 92: ",f1)

//5. findIndex() of student "Kiran"
let f2=students.findIndex((studentObj)=>studentObj.name==="Kiran")
console.log("Index of student 'Kiran': ",f2)
