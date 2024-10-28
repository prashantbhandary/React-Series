import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"

function App() {
  const [length , setlength]= useState(8)
  const [number, setnumber] =useState(false)
  const [char, setchar] = useState(false)
  const [password,setpassword] = useState('')

  //use ref hooks
  const passwordref = useRef(null)


  // use effect hook... 
  // that let u syncronize acomponent with a external component
  // in this let use useeffect hook

  const passwordgenerator = 
  //just to keep the thing in cache to optimize the program... we usecallback hooks
    useCallback( 
      ()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str+= "0123456789"
        if (char) str += "!@#$%^&*-_+=[]{}~`"
        for (let i = 1; i < length; i++) {
          let char =Math.floor(Math.random()* str.length+1)
          pass += str.charAt(char)
        }
        setpassword(pass)
      }
      ,[number , length , char , setpassword ] // if the value changegs any this it is use to optimise to bring the data from the cache
    
    )

    const copyPassword= useCallback (
      ()=>{
        passwordref.current?.select()
        passwordref.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(password)
      },[password]
    )
     
    //can be done only by using the use effect only... 
    useEffect (()=>{
      passwordgenerator()

    }, [length,char,number, passwordgenerator])   //not same of usecall back.. // where this dependency is not same as of usecall back , if any of the value change here in dependency it reload all the again . to re run the stuff

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-blue-400 text-center m-5 text-3xl font-extrabold -tracking-tighter  '>Password Generator</h1>

        {/* //box and coppy button  */}
                    <div className="flex rounded-lg overflow-hidden mb-6">
                        <input type="text"
                            value={password}
                            readOnly
                            className="outline-none w-full py-2 px-4"
                            placeholder="Password"
                            ref={passwordref}

                        />

                      <button 
                        className=' bg-blue-700 text-white px-4'
                        onClick={copyPassword}
                        >Copy</button>

                    </div>

        {/* text part */}
                    <div className='flex text-md gap-x-4'>

                      {/* // slider and length */}
                                          <div className='flex items-center gap-x-1'>
                                              <input 
                                                type="range"
                                                min={6}
                                                max={100}
                                                value={length}
                                                className='cursor-pointer'
                                                onChange={(e)=> {setlength(e.target.value)}}
                                                  />
                                              <label>Length: {length}</label>
                                          </div>
                      {/* // number */}
                                          <div className="flex items-center gap-x-1">
                                                      <input
                                                          type="checkbox"
                                                          id="numberInput"  
                                                          defaultValue={number}
                                                          onChange={()=>{
                                                              setnumber((prev)=> !prev)
                                                          }}
                                                      />
                                                    <label htmlFor="numberInput">Numbers</label>
                                          </div>
                                      
                      {/* //Characters */}
                                          <div className="flex items-center gap-x-1">
                                                  <input
                                                      type="checkbox"
                                                      id="characterInput"
                                                      defaultValue={char}
                                                      onChange={()=>{
                                                        setchar((prev)=> !prev)
                                                    }}
                                                  />
                                                <label htmlFor="characterInput">Characters</label>
                                          </div>

                     </div>


</div>
 

    </>
  )
}

export default App
