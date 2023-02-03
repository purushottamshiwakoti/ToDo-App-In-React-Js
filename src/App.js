import { useState } from "react";
import './App.css'

function App() {
  const[tmp,setTmp]=useState("");
  const[value,setValue]=useState([]);

 const handleOnCHange=(e)=>{
    setTmp(e.target.value)
  }
  const handleOnClick=()=>{
    setValue((goat)=>{
      return [...goat,tmp]

    })
    setTmp("")


  }
  const handleOnDelete=(index)=>{
    setValue(prev => prev.filter((arrElement, i) => i !== index));
  };
  return (
   
    <div className="App">
    <div className="container">
    <h1>ToDo List</h1>
    <input type="text" placeholder="What you want to do " value={tmp} onChange={handleOnCHange} />
    <button onClick={handleOnClick}>+</button>
    
    {
      value.map((rank, index)=>{
        return(
       <>

         <p>{rank}  <ion-icon name="close-outline" onClick={()=>handleOnDelete(index)}></ion-icon></p>
          
         
         </>
         
          
        ) 
      })
    }
    </div>
    
    

    </div>
  );
}

export default App;
