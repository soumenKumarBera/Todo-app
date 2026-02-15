import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const intilayTodoItems = [
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

  const [todoItems, setTodoItems] = useState(intilayTodoItems);

  let handelOnClick = (newName, Date) => {
    // console.log(`${name}  ${dueDate}`)
    let newTodoItem = [...todoItems, { name: newName, dueDate: Date }];

    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onClick={handelOnClick} />
      <TodoItems todoItem={todoItems}></TodoItems>
    </center>
  );
}

export default App;
