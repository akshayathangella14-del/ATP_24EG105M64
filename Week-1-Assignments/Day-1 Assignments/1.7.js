//Searching an element using function
function searchElement(arr, key) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] === key) 
        {
            return i;
        }
    }
    return "Not Found";
}
let arr = [10, 20, 30, 40, 50];
let index = searchElement(arr, 60); //storing the return value into  variable
console.log(index);