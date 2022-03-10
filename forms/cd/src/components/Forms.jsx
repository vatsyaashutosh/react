import { useState } from "react";
import axios from 'axios';
export const Forms = ()=>{
    const [formData,setFormData] = useState({
        username:"",
        age:"",
        email:"",
    });
    const handleChange=(e)=>{
        console.log(e.target);
        const {value,id} =e.target
        setFormData({
            ...formData,

            [id]:value
        })
    }
    
        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post('http://localhost:3001/users',formData).then(()=>{
                alert('user created successfully ');
                setFormData({
                    username:"",
                    age:"",
                    email:""
                })
            })
        }
    
    return(
        <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <input type="text" placeholder="Enter usernae"
            onChange={handleChange}
            id="username" 
            value ={formData.username}/>
            <input type="text" placeholder="Enter age"
            onChange={handleChange}
            id="age" value={formData.age} />
            <input type="text" placeholder="Enter email"
            onChange={handleChange}
            id="email" value={formData.email} />
            <input type="submit" value="Submit" />
        </form>
    )
    }