import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Bye milk",
      dueDate: "04/10/2026",
    },
    {
      name: "potato",
      dueDate: "04/6/2026",
    },
    {
      name: "whatermelon",
      dueDate: "04/9/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItem={todoItems}></TodoItems>
    </center>
  );
}

export default App;
