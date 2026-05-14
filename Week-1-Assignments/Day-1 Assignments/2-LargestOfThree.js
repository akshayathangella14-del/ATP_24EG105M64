//Find the largest number from the given three numbers
let a=17;
let b=43;
let c=79;
//Checking conditions for a,b and c to find the largest number
if(a>b) 
{   
    //If a is greater than b then check whether a is also greater than c
    if(a>c)
    {
        console.log("a is the largest number");
    }
    //If a is greater than b but not greater than c then c is the largest number
    else
    {
        console.log("c is the largest number");
    }
}
//If a is not greater than b then check whether b is greater than c
else if(b>c)
    console.log("b is the largest number");
else
    console.log("c is the largest number");