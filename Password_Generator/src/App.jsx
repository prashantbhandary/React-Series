import { useCallback } from "react"
import { useState } from "react"

function App() {
  const [length , setlength]= useState(8)
  const [number, setnumber] =useState(false)
  const [char, setchar] = useState(false)
  const [password,setpassword] = useState('')


  const passwordgenerator= 
    useCallback( 
      ()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str+= "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
        for (let i = 0; i < str.length; i++) {
          let char =Math.floor(Math.random()* str.length+1)
          pass += str.charAt(char)
        }
        setpassword(pass)
      }
      ,[number , length , char , setpassword ]
    
    )
     
  
  return (
    <>
        <h1 className="text-4xl text-center text-white">
          Password generator
        </h1>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">


      </div>
      </div>
      
     

    </>
  )
}

export default App
