# Learning the react

## Started Day 1

- Started by creating files for a React app using two different methods:
    - **Using Create React App:**
        - `npx create-react-app my-app`
        - `npm run start`
    - **Using Vite + React:**
        - `npm create vite@latest`
        - `npm run dev`
        - `npm install` (to install the required `node_modules`)
        - This method is comparatively faster than Create React App.
- Deleted unnecessary files and explored the flow of various functions to understand how they work within the app.

## Day 2 
- Today, I learned about hooks in React, focusing on how they work and why they are important.
- Hooks are used for updating the UI; for example, `useState` helps manage the counter value wherever it is displayed.
- I created a 02_counter project where I used `useState` to update the counter variable. It changes as I increment or decrement the count.
- I added a condition to keep the counter within a range of 0 to 20, ensuring it doesn’t go negative or exceed the maximum limit.

- **Virtualdoms Fibre and Reconcilation**
    - Follow this documentation: [React Fiber](https://github.com/acdlite/react-fiber-architecture)

## Day 3

- Setup Tailwind CSS with React and Vite
    - **Install dependencies**:
        
        ```
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

        Edit content by: 

        content: [
         "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],

        And css by this:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        npm run dev
        ```

- Today, I learned to create a custom version of React to gain a deeper understanding of how React operates under the hood. In `04_custom_react.js`, we access the HTML DOM directly and define an object that consists of types, props, and other attributes. This object is then passed to a custom `render` function, similar to how React's render process works.

- Our custom `render` function creates DOM elements based on these objects, assigns various attributes, and finally appends the elements to the DOM. This demonstrates the basic mechanism of React: using objects to represent UI components, rendering them into the DOM, and updating elements as needed. Through this process, we get a simplified but insightful look at React's virtual DOM and rendering principles.

## Day 4 

- Let's see what are ar different **`Hooks`** we can learn with `Password generator` project

    -  **`useCallback`**
useCallback is a React Hook that lets you cache a function definition between re-renders.
    - It allows you to "remember" a function so you don’t have to create a new one every time your component updates.3ww

        ```
        const cachedFn = useCallback(fn, dependencies)

## Day 5 (More about Hooks)


### 1. useEffect Hook
The `useEffect` hook lets you synchronize a component with external components, APIs, or other resources. It manages side effects in functional components, like fetching data, setting up subscriptions, and updating the DOM.

- **Usage**:
  ```jsx
  import { useEffect } from 'react';

  useEffect(() => {
    // Side effect logic, e.g., fetching data
    return () => {
      // Cleanup function (optional)
    };
  }, [dependencies]); // Dependencies array controls re-runs
  ```

- **Key Points**:
  - Syncs component with external data or states.
  - Runs on mount and re-runs when dependencies change.
  - Includes an optional cleanup function for removing listeners or canceling requests.

---

### 2. useCallback Hook
The `useCallback` hook helps optimize the app by caching functions, avoiding re-creation of function instances on each render.

- **Usage**:
  ```jsx
  import { useCallback } from 'react';

  const memoizedCallback = useCallback(() => {
    // Cached function logic here
  }, [dependencies]); // Only re-caches if dependencies change
  ```

- **Key Points**:
  - Caches functions when dependencies remain unchanged.
  - Helps prevent unnecessary re-renders, especially for functions passed as props.
  - Improves performance by reducing re-computations.

---

### 3. onChange Function in Password Generator Project
The `onChange` function captures user input changes in your Password Generator project. It typically works alongside `useState` and `useEffect` to manage component state and update the UI based on user actions.

- **Usage**:
  ```jsx
  const handleChange = (event) => {
    // Logic to update state on input change
  };

  return <input type="text" onChange={handleChange} />;
  ```

- **Key Points**:
  - Captures and handles user input in real-time.
  - Works with `useState` to update password state.
  - Can be combined with `useEffect` to react to state changes dynamically.

---

### Summary
- **useEffect**: Manages side effects; reruns on dependency changes.
- **useCallback**: Caches functions for optimized performance.
- **onChange**: Handles real-time user input, crucial for projects like a Password Generator.

# Day 6 (Custom hooks)