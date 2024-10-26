import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {

  return (
    <>
    <h1>hello lets do react with vite</h1>
    </>
  )
}

// const reactElement = {
//   type:'a',
//   props: {
//       href: " https://google.com",
//       target : '_blank'
//   },
//   children : 'click me to visit google'

// }


const anotherElement = (
  <a href="https://www.google.com">click here to visit Google...</a>
);


const reactElement = React.createElement(
  'a',
  {href: ' https://google.com', target:"_blank"}
  , 'click me to visit google'

)



createRoot(document.getElementById('root')).render(
  
    <MyApp/>
    // MyApp()
    // anotherElement
    // reactElement
    
  
)
