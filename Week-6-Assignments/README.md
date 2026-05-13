# Week 6: Advanced React & MERN Integration

This repository contains three distinct projects that demonstrate advanced concepts in full-stack development, ranging from local state hooks to global state management and persistent backend integration.

## Table of Contents
1. [Overview](#overview)
2. [Project 1: React Fundamentals & Hooks (react-app-2)](#project-1-react-fundamentals--hooks-react-app-2)
3. [Project 2: State Lifting & External APIs (react-app-6)](#project-2-state-lifting--external-apis-react-app-6)
4. [Project 3: Employee Management Mini-MERN App](#project-3-employee-management-mini-mern-app)
5. [Core Learning Concepts](#core-learning-concepts)

---

## Overview
Week 6 focuses on building dynamic, data-driven applications. The curriculum introduces **React Hook Form** for robust input handling, **React Router** for multi-page navigation, and **Context API** alongside **Zustand** for complex state management. The week culminates in a **Mini-MERN project** that connects a React frontend to an Express/MongoDB backend.

---

## Project 1: React Fundamentals & Hooks (react-app-2)
A collection of modules exploring React's built-in hooks and third-party form libraries.
*   **State Management:** Implements `useState` for simple counters and complex object/array updates.
*   **Side Effects:** Uses `useEffect` to manage component lifecycles and simulate API rendering logic.
*   **Form Handling:** Integrates `react-hook-form` to manage user inputs with real-time validation, including mandatory field checks and whitespace prevention.

## Project 2: State Lifting & External APIs (react-app-6)
Demonstrates how to handle data from external sources and synchronize state between sibling components.
*   **External Data:** Fetches a user list from `jsonplaceholder` using `fetch` within an asynchronous `useEffect` block.
*   **Lifting State Up:** Synchronizes a central `count` state in the `App` component, allowing the `Users` component to trigger updates that are immediately reflected in the `UserCount` component.

## Project 3: Employee Management Mini-MERN App
A full-stack application for managing employee data with a persistent database.
*   **Backend (Express & Mongoose):** A REST API providing CRUD operations for employee documents (name, email, mobile, designation, companyName).
*   **Frontend (React):** A multi-route application with specialized views for listing, creating, viewing, and editing employee records.
*   **Advanced State:** Combines **Context API** to share a counter across the app and **Zustand** for lightweight global state management.

---

## Core Learning Concepts
*   **Form Validation:** Mastering `register` and `handleSubmit` to ensure data integrity.
*   **Routing:** Using `createBrowserRouter` and `Outlet` for seamless navigation.
*   **Backend Integration:** Connecting frontend `fetch`/`axios` calls to Express routes.
*   **Database Schemas:** Defining Mongoose models with strict validation rules and timestamps.


