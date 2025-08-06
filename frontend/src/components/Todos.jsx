export function Todos({todos}){
    return <div>
        {
            todos.map(function(todo){
                return <div  key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={(function(){
                        fetch("https://todo-backend-chy7.onrender.com/complete" , {
                            method:"PUT",
                            headers: {"Content-Type": "application/json",},
                            body:JSON.stringify({
                                id:todo._id,
                            })
                        })
                    })}>{todo.completed ===true? "completed":"Mark as complete"}</button>
                </div>
            })
        }
    </div>
}