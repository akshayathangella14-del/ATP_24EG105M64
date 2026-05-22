/* 
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1. filter() all credit transactions
let f=transactions.filter((trans)=>trans.type==="credit")
console.log("All credit transactions: ",f)

//2. map() to extract only transaction amounts
let m=transactions.map((trans)=>trans.amount)
console.log("Transaction amounts: ",m)

//3. reduce() to calculate final account balance
let balance = transactions.reduce((acc, trans) => {
  if (trans.type === "credit") 
    return acc + trans.amount;
  else 
    return acc - trans.amount;
}, 0);
console.log("Final account balance: ",balance);

//4. find() the first debit transaction
let f1=transactions.find((trans)=>trans.type==="debit")
console.log("First debit transaction: ",f1)

//5. findIndex() of transaction with amount 10000*/
let f2=transactions.findIndex((trans)=>trans.amount===10000)
console.log("Index of amount 1000: ",f2)