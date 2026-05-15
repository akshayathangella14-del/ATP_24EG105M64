# ATP-MERN-Week-5-Assignments

This repository contains the Week 5 curriculum, focusing on advanced styling techniques and the introduction of component-based architecture using React.

## Table of Contents
1. [Day 12: Advanced Layouts with Standard CSS](#day-12-advanced-layouts-with-standard-css)
2. [Day 13: Modern Styling with Tailwind CSS](#day-13-modern-styling-with-tailwind-css)
3. [Day 14: React Application Development](#day-14-react-application-development)

---

## Day 12: Advanced Layouts with Standard CSS
The first part of the week focuses on mastering **CSS Flexbox** and structural styling without external frameworks.

*   **Flexbox Layout:** Implementation of a responsive navigation bar and card system using `display: flex`, `justify-content`, and `gap` properties.
*   **Table Styling:** Specialized styling for data tables, including `border-collapse` and alignment techniques to ensure readability.
*   **User Directory:** A professional layout for displaying user information, utilizing custom CSS for gradients, rounded avatars, and a structured column-to-row flow for child elements.

---

## Day 13: Modern Styling with Tailwind CSS
Day 13 introduces utility-first styling through **Tailwind CSS**, emphasizing responsive design and faster UI development.

*   **Tailwind Setup:** Configuration of `input.css` and `output.css` to build the Tailwind utility library.
*   **Responsive Cards:** Development of a card-based UI that dynamically switches from a row-based layout to a column-based layout on smaller screens (max-width: 600px) using media queries and Tailwind utilities.
*   **Flex-Grow Layouts:** Implementing a "sticky footer" effect by using `flex-grow: 1` on the main content area to ensure the footer stays at the bottom of the viewport.

---

## Day 14: React Application Development
The final segment of the week involves building two distinct **React applications** to practice component reusability and props management.

### React App 1: Product Showcase
This application focuses on rendering a complex dataset of e-commerce products.
*   **Component Architecture:** Features a modular `Product.jsx` component that receives data via `props`.
*   **Data Mapping:** Dynamically renders a grid of 20 products (including electronics, jewelry, and clothing) from a central state array using the `.map()` method.
*   **Responsive Grid:** Uses Tailwind's `grid-cols` utilities to display a single column on mobile, two on tablets, and three on large screens.

### React App 2: User Dashboard
A multi-component dashboard designed to simulate a professional user management interface.
*   **Modular Layout:** The `App.jsx` file integrates a `NavBar`, a central `UsersList`, and a `Footer` component to create a complete page structure.
*   **User Management:** The `UsersList.jsx` component maps through an array of user objects, passing specific data to individual `User.jsx` components.
*   **UI Design:** Implements styled components for the header and footer with dark themes (`bg-gray-800`) and shadow-rich user cards with gradient backgrounds.
