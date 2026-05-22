//Finding minimum marks
let marks=[90,78,65,98];
let min=marks[0];
//Iterating through the marks array to find the minimum mark
for(let i=1;i<marks.length;i++)
{
    //Checking if the current mark is less than the minimum mark found so far
    if(marks[i]<min)
        min=marks[i];
}
console.log("Smallest element: ",min);