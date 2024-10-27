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
      ```bash
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

- Today, I learned to create a custom version of React to gain a deeper understanding of how React operates under the hood. In `04_custom_react.js`, we access the HTML DOM directly and define an object that consists of types, props, and other attributes. This object is then passed to a custom `render` function, similar to how React's render process works.

- Our custom `render` function creates DOM elements based on these objects, assigns various attributes, and finally appends the elements to the DOM. This demonstrates the basic mechanism of React: using objects to represent UI components, rendering them into the DOM, and updating elements as needed. Through this process, we get a simplified but insightful look at React's virtual DOM and rendering principles.

## Day 4

 
  