import TodoItem1 from "./TodoItem1";

const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <>
      <div className="item-container">
        {todoItem.map((item) => (
          <TodoItem1
            todoName={item.name}
            todoDate={item.dueDate}
            key={item.name}
            onDeleteClickItem={onDeleteClick}
          ></TodoItem1>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
