import { useState } from "react";

export function Counter(){
    const [counter,setCounter]= useState(0);
    const handleChange = (value)=>{
        if(counter+value>=0)
        setCounter(counter+value)
    }
    return  <div> <h3>Counter:{counter}</h3>
    <button onClick = {()=>handleChange(1)
         
        }>
        add
    </button>
    <button onClick={()=>handleChange(2)}>double</button>
    <button onClick={()=>{handleChange(-1)}}>
        subtract
    </button>
    </div>

}