import { useState } from 'react';


export function CreateTodo(){
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    //const [compleated , setCompleated] = useState("")
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><div></div>
        <input type="description" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><div></div>

        <select id="select" value={selectedOption} onChange={handleChange}>
            <option value="false">false</option>
            <option value="true">true</option>
        </select>
        <button onClick={function(){
            fetch("http://localhost:3000/todo" ,{
                method:"POST",
                body:JSON.stringify({ // JSON will be captial
                    title:title,
                    description:description,
                    completed:selectedOption ==="true"
                }),
                headers: {"Content-Type": "application/json"}
            })
        }}>Add a todo</button>
    </div>
}