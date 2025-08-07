import { useState } from 'react';


export function CreateTodo({setUpdate, update}){
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    //const [compleated , setCompleated] = useState("")
    const [selectedOption, setSelectedOption] = useState("false");
    return <div>

        <input  style={{padding: "8px",fontSize: "16px",border: "2px solid #ccc",borderRadius: "7px",outline: "none",width: "20%",}} 
        type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><div></div>

        <input style={{padding: "8px",fontSize: "16px",border: "2px solid #ccc",borderRadius: "7px",outline: "none",width: "20%",}} 
         type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><div></div>

        <select  style={{padding: "8px",fontSize: "16px",border: "2px solid #ccc",borderRadius: "7px",}} 
        id="select" value={selectedOption.toString()} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="false">false</option>
            <option value="true">true</option>
        </select><div></div>
        <button  style={{padding: "8px 16px",fontSize: "16px",border: "2px solid #ccc",borderRadius: "7px",cursor: "pointer",}} 
        onClick={async function(){
            await fetch("https://todo-backend-chy7.onrender.com/todo" ,{
                method:"POST",
                body:JSON.stringify({ // JSON will be captial
                    title:title,
                    description:description,
                    completed:selectedOption ==="true"
                }),
                headers: {"Content-Type": "application/json"}
            })
            setUpdate(!update)
        }}>Add a todo</button>
    </div>
}