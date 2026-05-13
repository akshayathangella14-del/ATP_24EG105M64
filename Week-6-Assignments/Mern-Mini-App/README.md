# Employee Management Mini-MERN Application

A comprehensive full-stack application designed to manage employee records. The system allows users to create, view, update, and delete employee profiles while demonstrating advanced state management techniques and persistent data storage.

## Table of Contents
* [Backend Architecture](#backend-architecture)
* [Frontend Architecture](#frontend-architecture)
* [API Endpoints](#api-endpoints)
* [Data Validation & Schemas](#data-validation--schemas)
* [State Management](#state-management)

---

## Backend Architecture
The backend is built with **Node.js** and **Express.js**, utilizing **Mongoose** for MongoDB interaction.

### Core Components
*   **`server.js`:** The entry point that initializes the Express app, configures CORS, and establishes a connection to the MongoDB database using `dotenv` for environment variables.
*   **Modular Routing:** Employs `exp.Router()` in `EmployeeAPI.js` to separate employee-related logic from the main server configuration.
*   **Global Error Handling:** Implements specialized middleware to catch and return structured JSON error messages for `ValidationError` (schema violations) and `CastError` (invalid database IDs).

---

## Frontend Architecture
The frontend is a single-page application (SPA) built with **React**, featuring dynamic routing and modern UI components styled with **Tailwind CSS**.

### Routing System
The app uses `createBrowserRouter` to manage five distinct navigation paths:
*   **Home (`/`):** Dashboard showing global state metrics.
*   **Create Employee (`/create-emp`):** A form-based view to register new staff.
*   **List of Employees (`/list`):** A grid view of all stored employees with action buttons (View, Edit, Delete).
*   **View Employee (`/employee`):** Detailed view of a specific record passed via navigation state.
*   **Edit Employee (`/edit-emp`):** Interface to modify existing records, pre-filled using the `useLocation` hook.

---

## API Endpoints
The backend exposes a RESTful API at the base path `/employee-api/employees`:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/employees` | Registers a new employee document. |
| **GET** | `/employees` | Retrieves the list of all employees. |
| **PUT** | `/employees/:id` | Updates a specific employee by their database ID. |
| **DELETE** | `/employees/:id` | Permanently removes an employee record. |

---

## Data Validation & Schemas
Data integrity is enforced on both the client and server:

*   **Mongoose Schema (`EmployeeModel.js`):** Defines the structure for `name`, `email`, `mobile`, `designation`, and `companyName`. It includes strict rules:
    *   **Name:** Required; length between 4 and 8 characters.
    *   **Email:** Required and must be unique.
    *   **Timestamps:** Automatically tracks `createdAt` and `updatedAt`.
*   **React Hook Form:** The frontend uses `react-hook-form` in `CreateEmp.jsx` and `EditEmployee.jsx` to manage input states and handle form submissions asynchronously.

---

## State Management
The application demonstrates three distinct layers of state management to handle different data scopes:

1.  **Local State:** Managed via `useState` for component-specific data like `loading` and `error` indicators.
2.  **Context API (`ContextProvider.jsx`):** Provides a global `counter` and `changeCounter` function shared across `Home`, `CreateEmp`, `EditEmployee`, and `ListOfEmps`.
3.  **Zustand Store (`CounterStore.js`):** A lightweight global store used in the `Home` and `Test` components to manage independent counters and user profile data (name, email, age).

## Technical Stack
*   **Backend:** Node.js, Express, MongoDB (Mongoose), Cors, Dotenv.
*   **Frontend:** React, React Router, Tailwind CSS, Axios, Zustand, React Hook Form.
