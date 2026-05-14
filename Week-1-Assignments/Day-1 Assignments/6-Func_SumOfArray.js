//Sum of array using function
function sumOfArray(arr) {
    let sum = 0;
    //Iterating through the array to calculate the sum of elements
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//Example usage
let marks = [90, 78, 65, 98];
let result = sumOfArray(marks);
console.log("Sum of array: ", result);