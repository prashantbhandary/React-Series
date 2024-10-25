import { useState } from "react";
function App() {

  let [counter,setCounter]= useState(15)
  const add =()=>{
    if(counter<20)
    { 
      counter=counter+1
      setCounter(counter)
    }
    else{
      alert("Can't exceed 20")
    }
  }
  const removevalue=()=>{
    if(counter>0){
      counter=counter-1
      setCounter(counter)
    }
    else{
      alert("Can't be less than 0")
    }
  }

  return (
    <>
    {/* for ui updation we use hooks 
        here using hooks i.e useState helps us in updating the counter value 
        where every the counter is being diplayed


    */}
     <h1>Prashant and react</h1>
     <h2>Counter value = {counter}</h2>
    
     <button onClick={add}> Add value {counter}</button><br/>
     <button onClick={removevalue}> Remove value {counter} </button>
    </>
  )
}

export default App
