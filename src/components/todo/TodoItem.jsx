import { useDispatch } from "react-redux";
import { deleteTodo, openUpdateModel, toggleComplete } from "./todoSlice";

const TodoItem = ({ todo, number }) => {
  const { id, text, isCompleted, createdAt } = todo;
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(toggleComplete(id))}
      title="Click to select as done"
      className={`border rounded p-2 d-flex gap-2 flex-wrap justify-content-between align-items-center ${
        isCompleted ? "bg-success text-white" : ""
      }`}
    >
      <div className="grid gap-2">
        <div>
          <span
            style={{
              height: "1.5rem",
              width: "1.5rem",
              background: "var(--bs-gray-100)",
              color: "var(--bs-gray-900)",
            }}
            className="rounded-circle border border-info d-inline-flex justify-content-center align-items-center me-2"
          >
            {number}
          </span>
          <span
            className={`${isCompleted ? "text-decoration-line-through" : ""}`}
          >
            {text}
          </span>
        </div>
        <time style={{fontSize: '.75rem'}}>{createdAt.toDate().toLocaleString()}</time>
      </div>
      <div className="d-flex gap-2">
        {/* Edit btn  */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openUpdateModel(id));
          }}
          className="btn btn-info px-3 py-1 d-inline-block rounded-pill"
        >
          Edit
        </button>
        {/* Delete btn  */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteTodo(id));
          }}
          className="btn btn-danger px-3 py-1 d-inline-block rounded-pill"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
