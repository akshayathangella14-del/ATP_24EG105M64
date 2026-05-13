# react-app-6: API Integration & State Synchronization

This project illustrates how to build a dynamic React application that fetches data from an external API and synchronizes state between sibling components through their common parent.

## Table of Contents
* [Overview](#overview)
* [Key Features](#key-features)
* [Component Architecture](#component-architecture)
* [Technical Implementation](#technical-implementation)
    * [Asynchronous Data Fetching](#asynchronous-data-fetching)
    * [Lifting State Up](#lifting-state-up)
* [Styling & Responsive Design](#styling--responsive-design)

---

## Overview
The primary objective of `react-app-6` is to fetch a list of users from a public API (`JSONPlaceholder`) and allow the user to "Add" them to a central count. This project highlights the **"Lifting State Up"** pattern, where the `App` component manages a shared state used by independent child components.

## Key Features
*   **External API Consumption:** Fetches real-time user data using the native `fetch` API.
*   **State Lifecycle Management:** Manages distinct states for data, loading indicators, and error handling.
*   **Cross-Component Communication:** Uses props to pass event handlers from parent to child, enabling siblings to interact.
*   **Dynamic List Rendering:** Efficiently transforms an array of data into a grid of styled UI cards using the `.map()` method.

---

## Component Architecture
The application is comprised of three main files:

| Component | Responsibility |
| :--- | :--- |
| **`App.jsx`** | The central hub that holds the `count` state and coordinate siblings. |
| **`Users.jsx`** | Handles the side effect of fetching data and renders the list of user cards. |
| **`UserCount.jsx`** | A presentational component that displays the current user count received via props. |

---

## Technical Implementation

### Asynchronous Data Fetching
In **`Users.jsx`**, the `useEffect` hook is used to trigger an `async` function when the component mounts:
*   **Loading State:** `setLoading(true)` is called before the fetch to show a "Loading..." message.
*   **API Call:** It awaits data from `https://jsonplaceholder.typicode.com/users`.
*   **Error Handling:** A `try...catch...finally` block ensures that errors are caught and the loading state is reset regardless of the outcome.

### Lifting State Up
The **`App.jsx`** component implements the state lifting pattern:
1.  It initializes a `count` state: `const [count, setCount] = useState(0)`.
2.  An `increment` function is defined to update this state.
3.  The `count` is passed to **`UserCount`** for display.
4.  The `increment` function is passed to **`Users`** as the `onAddUser` prop.
5.  When a button is clicked in a user card, it triggers `onAddUser`, updating the count seen in the sibling component.

---

## Styling & Responsive Design
The project uses **Tailwind CSS** to ensure a modern and responsive user interface:
*   **Responsive Grid:** The user list uses `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3` to adapt the layout across different screen sizes.
*   **Visual Aesthetics:** Individual cards feature rounded corners (`rounded-3xl`), deep shadows (`shadow-2xl`), and a purple-to-indigo gradient background (`bg-gradient-to-r from-purple-200 to-indigo-100`).
*   **Typography:** Utilizes a mix of bold headers and serif fonts for better information hierarchy.
