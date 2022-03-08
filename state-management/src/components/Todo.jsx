import { useState } from "react";
import { TodoInput} from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
export const Todo = () =>{
    const [todos, setTodos] = useState([])
    const addTodo = (data) =>{
        const t={
            id:nanoid(),
            title:data,
            status:false
        }
        setTodos([...todos,t])
        console.log([...todos,t])
    }
    const changeStatus = (id)=>{
        let mapped=todos.map(e=>{
            return e.id==id?{...e,status:!e.status}:{...e}
        });
        setTodos(mapped)
    }
    const deleteElement=(id)=>{
        setTodos(todos.filter(to=>{
           return (to.id!==id) 
        }))
    }
  return (
    <div>
        <TodoInput addTodo={addTodo}/>
        {
            todos.map((e)=>(
                <TodoItem changeStatus={changeStatus} deleteElement={deleteElement} todo={e} key={e.id}/>
            ))
}
    </div>
  )
}