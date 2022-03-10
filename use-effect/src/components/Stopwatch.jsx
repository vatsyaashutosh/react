import { useEffect, useState } from "react"

export const Stopwatch = ({time,etime}) =>{
    const [timer,setTimer] = useState(time);
    useEffect(()=>{
        const id=setInterval(()=>{
            setTimer((prev)=>{
                if(prev==etime) {clearInterval(id);
                return prev}
                return prev-1;
            });

        },1000);
        return ()=>{
            
            clearInterval(id);
        }
    },[]);
    return <div>Timer:{timer}</div>
}