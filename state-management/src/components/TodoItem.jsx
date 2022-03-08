import './todo.css'
export const TodoItem = ({todo,deleteElement,changeStatus}) =>{
    return (

    <div className={todo.status?"strike":""}>{todo.title} <button onClick={()=>{
        changeStatus(todo.id)
    }}>Toggle Todo</button>
    <button onClick={()=>{
        deleteElement(todo.id)
    }}>Delete</button>
    </div>
    )
}