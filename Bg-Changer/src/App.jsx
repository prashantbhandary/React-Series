import { useState } from "react"

function App() {
 
  const [color,setcolor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen"
       style={{backgroundColor: color}}>

      <div className=" fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 bg-slate-200 shadow-lg px-3 py-2 rounded-full">

          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style ={{backgroundColor: "red"}}
            onClick={()=>{setcolor('red')}}
          > Red
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style ={{backgroundColor: "Green"}}
            onClick={()=>{setcolor('green')}}
          > Green
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style ={{backgroundColor: "blue"}}
            onClick={()=>{setcolor('blue')}}
          > Blue
          </button>

          <button className=" outline-none px-4 py-2 text-white  rounded-full shadow-lg "
          style={{backgroundColor:'black'}}
          onClick={()=>setcolor('black')}
          >
              Black
          </button>

          <button className=" outline-none px-4 py-2 text-black  rounded-full shadow-lg "
          style={{backgroundColor:'White'}}
          onClick={()=>setcolor('white')}
          >
              White
          </button>

          <button className=" outline-none px-4 py-2 text-white  rounded-full shadow-lg "
          style={{backgroundColor:'Pink'}}
          onClick={()=>setcolor('Pink')}
          >
              Pink
          </button>

          <button className=" outline-none px-4 py-2 text-white  rounded-full shadow-lg "
          style={{backgroundColor:'Teal'}}
          onClick={()=>setcolor('Teal')}
          >
              Teal
          </button>

          <button className=" outline-none px-4 py-2 text-black-200 rounded-full shadow-lg "
          style={{backgroundColor:'Lavender'}}
          onClick={()=>setcolor('Lavender')}
          >
              Lavender
          </button>
          <button className=" outline-none px-4 py-2 text-white rounded-full shadow-lg "
          style={{backgroundColor:'Turquoise'}}
          onClick={()=>setcolor('Turquoise')}
          >
              Turquoise
          </button>
          <button className=" outline-none px-4 py-2 text-white rounded-full shadow-lg "
          style={{backgroundColor:'Magenta'}}
          onClick={()=>setcolor('Magenta')}
          >
              Magenta
          </button>
          <button className=" outline-none px-4 py-2 text-white rounded-full shadow-lg "
          style={{backgroundColor:'Orange'}}
          onClick={()=>setcolor('Orange')}
          >
              Orange
          </button>

          
          </div>
      </div>

      

      </div>

    </>
  )
}

export default App
