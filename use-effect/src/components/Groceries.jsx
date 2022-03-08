import { useEffect, useState } from "react";
import axios from "axios";

export const Grocery = () =>{
    const[text,setText]=useState("")
    const[grocery,setGrocery]=useState([]);
    const[page,setPage]=useState(1)
    useEffect(()=>{
        getData();
        
    },[page])
    const getData = ()=>{
        axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then(res=>{
        setGrocery(res.data);
        })
    }
   return (
       <div>


       <input onChange={(e)=>(
           setText(e.target.value))

       } type="text" />
       <button onClick={()=>{
        //    fetch('http://localhost:3001/groceries',{
        //        method:"Post",
        //        body:JSON.stringify({title:text,purchased:false}),
        //        headers:{
        //            "content-type":"application/json"
        //        }})
        axios.post('http://localhost:3001/groceries',{title:text,purchased:false})
        .then(()=>{
            getData();
        })
          
       }}>add</button>
       {grocery.map((g)=>(
           <div key={g.id}>{g.title}</div>
           ))  
        }
           <button onClick={()=>{
               if(page>1)
               setPage(page-1)
           }}>Previous page</button>
       <button onClick={()=>{
           setPage(page+1)
       }}>Next page</button>
       
       </div>
   )
}