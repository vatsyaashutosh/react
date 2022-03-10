import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Grocery} from './components/Groceries'
import {Stopwatch} from './components/Stopwatch'
function App() {
  const [show,setShow] = useState(false);
 let [stime,setTime] =useState();
 let [etime,setEtime]=useState();

  return (
    <div className="App">
      <input placeholder='Starting number' type='text' onChange={(e)=>{
        setTime(+e.target.value)
        
         console.log(stime)
         
      }} />
      <input placeholder='Ending number' onChange={(e)=>{
       setEtime(+e.target.value);
      }} />
      {/* <Grocery/> */}
      
     { show?<Stopwatch time={stime} etime={etime}/>:""}
      <button onClick={()=>{
        setShow(!show) 
      }}
      >{show?"Hide Timer":"SHow TImer"}</button>
    </div>
  );
}

export default App;
