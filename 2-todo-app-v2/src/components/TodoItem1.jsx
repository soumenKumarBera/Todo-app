import { MdDeleteForever } from "react-icons/md";
import css from "./TodoItem1.module.css";

function TodoItem1({ todoName, todoDate, onDeleteClickItem }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${css.delete} btn btn-danger`}
            onClick={() => onDeleteClickItem(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
