//Write a function that receives 3 number args and  return the big number 
function sumOfThree(a, b, c) {
    if (a > b) {
        if (a > c)
            return a
        else
            return c
    }
    else if (b > c)
        return b
    else
        return c
}
let result = sumOfThree(50, 20, 30); //function calling
console.log("Sum of three numbers: ", result);
