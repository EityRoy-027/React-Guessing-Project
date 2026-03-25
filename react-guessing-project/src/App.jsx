import { useState } from "react"


function App() {
  
const [text, setText] = useState(0);
const [store, setStore] = useState(1);
const [types, setTypes] = useState('');

function resetBtn(){

let random =Math.floor(Math.random()*100)+1;
setText(random);
console.log(text);
}


function guessBtn(){
  if(text<store){
    setTypes("VeryHigh");
  }

   

  else if(text==store){
    setTypes("Correct");
  }

  else if(text>store){
    setTypes("Very Low");
  }
}

 
return (
    <>
      
    <div className=" h-screen flex justify-center items-center">

    <div className="w-[500px] h-[400px] rounded-xl bg-blue-100 flex flex-col justify-center items-center gap-8">

    <div className="font-bold text-3xl ">Guess the Number</div>
    
    <div className="w-[430px] h-[60px]"><input onChange={(e) => setStore(e.target.value)} className="w-[430px] h-[70px]  pl-2 rounded-md border-1 border-blue-500" placeholder="1-100" type="number" /></div>

    <div><button onClick={guessBtn}  className="w-[100px] h-[50px] bg-pink-500 rounded-md text-white">Guess</button></div>

    <div className="text-xl text-pink-500" >{types}</div>

    <div><button onClick={resetBtn} className="w-[100px] h-[50px] bg-blue-500 rounded-md text-white">Reset</button></div>


    </div>

   </div>

    </>
  )
}

export default App
