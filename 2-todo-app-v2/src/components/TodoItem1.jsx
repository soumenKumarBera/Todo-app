import { MdDeleteForever } from "react-icons/md";
import css from "./TodoItem1.module.css";

function TodoItem1({ todoName, todoDate, onDeleteClickItem }) {
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class={`${css.delete} btn btn-danger`}
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
