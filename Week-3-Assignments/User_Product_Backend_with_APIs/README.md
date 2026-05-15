# ATP-MERN-Week-3-Assignments

This repository summarizes the advanced backend development assignments completed during the third week of the ATP MERN program.  
The focus is on building robust backend services using **Express.js** and **Mongoose**, covering RESTful APIs, modular routing, schema validation, and middleware management.

---

## 📑 Table of Contents
1. [Core Technologies](#core-technologies)
2. [Project Architecture](#project-architecture)
3. [API Endpoints](#api-endpoints)
4. [Data Modeling](#data-modeling)
5. [Testing & Middleware](#testing--middleware)

---

## Core Technologies

The project utilizes several key libraries for backend functionality:

- **Express.js**: For building the HTTP server and managing RESTful routes.  
- **Mongoose**: To interact with MongoDB and define structured data models.  
- **Bcryptjs & JSONWebToken**: Integrated dependencies for authentication and security features.  
- **Cookie-parser**: For handling and parsing cookies in requests.  

---

## Project Architecture

The application follows a modular structure where specific logic is separated into dedicated files:

- **`server.js`**: The main entry point that initializes the Express application, applies global middleware, and mounts separate API routes for users and products.  
- **`UserAPI.js` & `ProductAPI.js`**: Modular routers that define specific logic for user and product resources.  
- **`UserModel.js` & `ProductModel.js`**: Define the database structure and validation rules using Mongoose Schemas.  

---

## API Endpoints

The system implements full **CRUD** (Create, Read, Update, Delete) functionality for two main resources:

### User API (`/user-api`)
- **GET `/users`**: Retrieves all registered users.  
- **GET `/users/:id`**: Finds a specific user by their unique ID.  
- **POST `/users`**: Creates a new user entry in the system.  
- **PUT `/users`**: Updates an existing user's profile information.  
- **DELETE `/users/:id`**: Removes a user from the system.  

### Product API (`/product-api`)
- **GET `/products`**: Lists all available products.  
- **GET `/products/:brand`**: Filters products based on a specific brand name.  
- **POST `/products`**: Adds a new product to the inventory.  
- **PUT `/products`**: Updates details of an existing product.  
- **DELETE `/products/:productId`**: Deletes a product from the database by ID.  

---

## Data Modeling

Assignments emphasize data integrity through **Mongoose Schema** validation:

- **Product Schema**: Validates `productId`, `productName`, `brand`, and enforces price constraints (minimum 10,000 and maximum 50,000).  
- **User Schema**: Enforces username length (4–8 characters), required email/password fields, and includes a **nested Cart Schema** that references product objects using `Types.ObjectId`.  

---

## Testing & Middleware

- **Custom Middleware**: The `server.js` file demonstrates the execution flow of multiple custom middleware functions (1 through 4) that process requests before they reach the final route handlers.  
- **Testing with `.http`**: A comprehensive `req.http` file is provided to test all defined endpoints, including samples for GET, POST, PUT, and DELETE requests for both Users and Products.  
