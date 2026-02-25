import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onClick }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

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
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handelOninpute}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handelOnDate} />
        </div>
        <div className="col-2 kg-btn">
          <button
            type="button kg-btn"
            className="btn btn-success kg-button"
            onClick={handelOnClick}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
