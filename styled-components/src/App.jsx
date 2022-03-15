
import { Button } from './button';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [counter,setCounter] =useState(0);
  const [theme,setTheme] = useState('dark')
  const ref =useRef(null);
  const startTimer = ()=>{
    
    ref.current=setInterval(()=>{
      setCounter((prev)=>
        prev+1)
      
    },1000
      
    )
  
  }
  useEffect(()=>{
    startTimer()},[])
  return (
    <div className="App">
      <h3>counter:{counter}</h3>
      <Button theme={theme} onClick={()=>[
        clearInterval(ref.current)
      ]}>stop</Button>
      <Button theme={theme} onClick={startTimer}>start</Button>
    <Button theme={theme} onClick={()=>{
      clearInterval(ref.current);
      setCounter(0);
    }}>reset</Button>
    <button onClick={()=>{
      setTheme(theme==='dark'?'light':'dark');
    }}>toggle theme</button>
    </div>
  );
}

export default App;
