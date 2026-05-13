/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
let f=movies.filter((movObj)=>movObj.genre==="Sci-Fi")
console.log("Sci-Fi movies: ",f)

//2. map() to return: "Inception (8.8)"
let m=movies.map((movObj)=>movObj.title+" ("+movObj.rating+")")
console.log("Movie tite and rating: ",m)

//3. reduce() to find average movie rating
let r=movies.reduce((acc,movObj)=>acc+movObj.rating,0)
let avg=r/movies.length
console.log("Average movie rating: ",avg)

//4. find() movie "Joker"
let f1=movies.find((movObj)=>movObj.title==="Joker")
console.log("Movie 'Joker': ",f1)

//5. findIndex() of "Avengers"
let f2=movies.findIndex((movObj)=>movObj.title==="Avengers")
console.log("Index of movie 'Avengers': ",f2)