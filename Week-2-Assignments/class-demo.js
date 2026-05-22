/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */

class Book {
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isAvailable = isAvailable
    }
    borrow() {

        return this.isAvailable = false
    }

    returnBook() {
        return this.isAvailable = true
    }

    getInfo() {
        return this.title + " by " + this.author + " " + "(" + this.pages + " pages)"
    }

    isLongBook() {
        if (this.pages > 300)
            return true
        return false

    }

}
let b1 = new Book("Mindset", "Carl", 250, true)
let b2 = new Book("Harry Potter", "James", 350, true)
let b3 = new Book("The Hobbit", "John", 200, true)
let b4 = new Book("Ikigai", "Robert", 300, true)
let b5 = new Book("The Power of Now", "Micheal", 400, true)
//i. Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())
//ii. Borrow 2 books and show their availability status
console.log("Borrowed 1st book and the availability status of 1st book is ", b1.borrow())
console.log("Borrowed 2nd book and the availability status of 2nd book is ", b2.borrow())
//iii. Return 1 book and show updated status
console.log("Returned 1st book and the availability status of 1st book is ", b1.returnBook())
//iv. Count how many books are "long books" (more than 300 pages)
let count = 0
if (b1.isLongBook())
    count++
if (b2.isLongBook())
    count++
if (b3.isLongBook())
    count++
if (b4.isLongBook())
    count++
if (b5.isLongBook())
    count++
console.log("Count of books more than 300 pages",count)
//v. List all available books
console.log("List all available books: ")
if(b1.isAvailable)
    console.log(b1.getInfo())
if(b2.isAvailable)
     console.log(b2.getInfo())
if(b3.isAvailable)
     console.log(b3.getInfo())
if(b4.isAvailable)
     console.log(b4.getInfo())
if(b5.isAvailable)
    console.log(b5.getInfo())
