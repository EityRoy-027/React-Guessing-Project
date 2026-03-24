import { useState } from "react"


function App() {
  
const [text, setText] = useState('')

  return (
    <>
      
   <div className=" h-screen flex justify-center items-center">

    <div className="w-[500px] h-[400px] rounded-xl bg-blue-100 flex flex-col justify-center items-center gap-8">

    <div className="font-bold text-3xl ">Guess the Number</div>
    
    <div className="w-[430px] h-[60px]"><input className="w-[430px] h-[70px]  pl-2 rounded-md border-1 border-blue-500" placeholder="1-100" type="number" /></div>

    <div><button className="w-[100px] h-[50px] bg-pink-500 rounded-md text-white">Guess</button></div>

    <div ></div>

    <div><button className="w-[100px] h-[50px] bg-blue-500 rounded-md text-white">Reset</button></div>


    </div>

   </div>

    </>
  )
}

export default App
