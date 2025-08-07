import { useState } from 'react';


export function CreateTodo({setUpdate, update}){
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    //const [compleated , setCompleated] = useState("")
    const [selectedOption, setSelectedOption] = useState("false");
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><div></div>
        <input type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><div></div>

        <select id="select" value={selectedOption.toString()} onChange={(e) => setSelectedOption(e.target.value ==="true")}>
            <option value="false">false</option>
            <option value="true">true</option>
        </select>
        <button onClick={async function(){
            await fetch("https://todo-backend-chy7.onrender.com/todo" ,{
                method:"POST",
                body:JSON.stringify({ // JSON will be captial
                    title:title,
                    description:description,
                    completed:selectedOption
                }),
                headers: {"Content-Type": "application/json"}
            })
            setUpdate(!update)
        }}>Add a todo</button>
    </div>
}