import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomMse";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  let handelOnClick = (newName, Date) => {
    // console.log(`${name}  ${dueDate}`)
    let newTodoItem = [...todoItems, { name: newName, dueDate: Date }];

    setTodoItems(newTodoItem);
  };

  const handelDeleteClick = (tododitemName) => {
    const currentTodoItem = todoItems.filter(
      (item) => item.name !== tododitemName,
    );
    setTodoItems(currentTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onClick={handelOnClick} />
      {todoItems.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItem={todoItems}
        onDeleteClick={handelDeleteClick}
      ></TodoItems>
    </center>
  );
}

export default App;
