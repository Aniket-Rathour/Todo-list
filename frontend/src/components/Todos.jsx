export function Todos({ todos, setTodos }) {
  function markComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, completed: true } : todo
      )
    );
  }
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={function () {
                const flag = fetch("https://todo-backend-chy7.onrender.com/complete" , {
                    method:"PUT",
                    headers: {"Content-Type": "application/json",},
                    body:JSON.stringify({
                        id:todo._id,
                    })
                })
                if (flag) {
                    markComplete(todo._id);
                }
              }}
            >
              {todo.completed === true ? "completed" : "Mark as complete"}
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
