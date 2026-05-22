# ATP-MERN-Week-2-Assignments

This repository summarizes the advanced JavaScript and Express.js assignments completed during the second week of the ATP MERN program.  
It transitions from basic logic to **functional programming with ES6+**, **modular architecture**, **asynchronous timers**, **Object-Oriented Programming (OOP)**, and the fundamentals of **backend development using Express.js**.

---

## 📑 Table of Contents
1. [Day 3: Functional Array Operations](#day-3-functional-array-operations)
2. [Day 3: Modular Application Systems](#day-3-modular-application-systems)
3. [Day 4: ES6+ Core Concepts & OOP](#day-4-es6-core-concepts--oop)
4. [Backend: Express.js REST API](#backend-expressjs-rest-api)

---

## Day 3: Functional Array Operations

Assignments focusing on modern array methods (`filter`, `map`, `reduce`, `find`, `findIndex`) to process data efficiently.

### 3.1 Simple Array Operations
- **Daily Temperature Analyzer**: Filters high temperatures, converts Celsius to Fahrenheit, and calculates averages.  
- **Online Course Processor**: Cleans and formats course names into a single uppercase string.  
- **Student Marks List**: Implements pass/fail filtering, adds grace marks, and identifies top scores.  

### 3.2 Advanced Business Logic
- **Shopping Cart Summary**: Manages in-stock filtering and calculates the grand total of a cart.  
- **Student Performance Dashboard**: Dynamically assigns letter grades (A–D) and calculates class averages.  
- **Employee Payroll Processor**: Handles department filtering and applies a 10% bonus to salaries.  
- **Movie Streaming Platform**: Filters by genre and formats movie titles with their ratings.  
- **Bank Transaction Analyzer**: Distinguishes between credits and debits to find the final account balance.  

---

## Day 3: Modular Application Systems

Projects demonstrating building complex systems by splitting logic into reusable ES6 modules.

### 3.3 E-Commerce Store
A multi-file system handling the full shopping lifecycle:
- **Product Management**: Searching and stock tracking.  
- **Cart Logic**: Adding/removing items and calculating totals.  
- **Discount Engine**: Validating coupons and calculating savings.  
- **Payment Processing**: Simulating checkouts and reducing stock levels.  

### 3.4 Task Management
A utility for managing daily tasks with a dedicated **Validator module** to ensure data integrity for titles, priorities, and dates.  

---

## Day 4: ES6+ Core Concepts & OOP

Assignments focusing on advanced language features and structural programming.

### 4.1 Shallow vs. Deep Copying
- Demonstrates the difference between simple copies and deep isolation using `structuredClone` to prevent unintended mutations in nested objects.  

### 4.2 Spread Operator & Rest Parameters
- Exercises on extending arrays/objects and creating functions that accept a variable number of arguments to calculate sums.  

### 4.3 Timer Functions
- **Exam Portal Simulator**: Uses `setTimeout` to simulate delayed evaluation and result posting.  
- **OTP Countdown**: Uses `setInterval` to create a 10-second countdown for resending security codes.  

### 4.4 Library Book Management (OOP)
- Implements a `Book` class with methods to `borrow()`, `returnBook()`, and `getInfo()`.  
- Includes logic to track availability and identify "long books" (over 300 pages).  

---

## Backend: Express.js REST API

The final part of the week introduces server-side development by creating a functional HTTP server.

- **Server Setup**: Initializing an Express application with JSON body-parsing middleware.  
- **User API**: Full CRUD (Create, Read, Update, Delete) routes for managing user profiles.  
- **Product API**: Routes to browse all products, filter by brand, and update inventory details.  
