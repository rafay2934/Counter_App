import React, {useState} from 'react';
import './App.css';
import Message from './Message.js';
function App() {
    let[count,setCount]= useState(1)
    let[isMorning,setMorning]=useState(true)

  return (
    
    <div className={`box ${isMorning ? 'daylight' :''}`}>
     

      <h1> Good {isMorning ? 'Morning':'Night'}</h1>

     <Message counter={count}/>
     <br />
     <button onClick={
       ()=> setCount(++count)
       }>
      Update Counter</button>
     
      
     <button onClick={()=>setMorning(!isMorning)
        }>
      Update Day</button>


    </div>
  );
}

export default App;
