//Sum of marks
let marks=[90,78,65,98]; 
let sum=0;
//Iterating through the marks array to calculate the sum of marks
for(let i=0;i<marks.length;i++)
{
    //Adding each mark to the sum variable
    sum+=marks[i];
}
console.log("Sum: ",sum);