/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */

const marks = [78, 92, 35, 88, 40, 67];
// 1. filter() marks ≥ 40 (pass marks)
let f=marks.filter((element)=>element>=40)    
console.log("marks ≥ 40 (pass marks): ",f)

//2. map() to add 5 grace marks to each student
let m=marks.map((element)=>element+5)
console.log("Adding 5 marks to each student: ",m)

//3. reduce() to find highest mark
let high=marks.reduce((acc,element)=>acc>element?acc:element)
console.log("Highest Marks: ",high)

//4. find() first mark below 40
let f1=marks.find((element)=>element<40)
console.log("First mark below 40: ",f1)

// 5. findIndex() of mark 92
let f2=marks.findIndex((element)=>element===92)
console.log("Index of marks 92: ",f2)