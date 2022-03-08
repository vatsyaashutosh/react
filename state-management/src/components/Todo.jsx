import { useState } from "react";
import { TodoInput} from "./TodoInput";
import { TodoItem } from "./TodoItem";
export const Todo = () =>{
    const [todos, setTodos] = useState([])
    const addTodo = (data) =>{
        const t={
            id:1,
            title:data,
            status:false
        }
        setTodos([...todos,data])
        console.log([...todos,t])
    }
  return (
    <div>
        <TodoInput addTodo={addTodo}/>
        {
            todos.map((e)=>(
                <TodoItem todo={e}/>
            ))
}
    </div>
  )
}