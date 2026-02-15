import { useState } from "react";

function AddTodo({ onClick }) {
  const [todoName, setTodoName] = useState();

  const [todoDate, setTodoDate] = useState();

  let handelOninpute = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  let handelOnDate = (event) => {
    // console.log(event.target.value);
    setTodoDate(event.target.value);
  };

  let handelOnClick = () => {
    onClick(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handelOninpute}
          />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handelOnDate} />
        </div>
        <div class="col-2 kg-btn">
          <button
            type="button kg-btn"
            class="btn btn-success kg-button"
            onClick={handelOnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
