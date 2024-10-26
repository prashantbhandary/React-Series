import { useState } from 'react'

import './App.css'
import Card from './components/Card'

let myobj={
  name:"prashant",
  age: "19"
}
let arry= [1,33,4,54,32,2]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4  mb-4'>Tailwind test</h1>
      <Card username="prashant" btnText='click me' />
      <Card username="ram prasad" btnText='visit me' />
    
    </>
  )
}

export default App
