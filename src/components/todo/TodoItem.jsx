import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "./todoSlice";

const TodoItem = ({ todo, number }) => {
  const { id, text, isCompleted, createdAt } = todo;
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(toggleComplete(id))}
      title="Click to select as done"
      className={`flex items-center justify-between gap-2 flex-wrap p-2 rounded-md border shadow bg-white hover:bg-green-300 transition ${
        isCompleted ? "bg-green-400 text-white" : ""
      }`}
    >
      <div className="grid gap-2">
        <div>
          <span className="w-6 h-6 rounded-full bg-slate-100 text-gray-900 inline-grid place-items-center border border-blue-500 mr-1.5">
            {number}
          </span>
          <span className={`${isCompleted ? "line-through" : ""}`}>{text}</span>
        </div>
        <time className="text-xs">{createdAt.toDate().toLocaleString()}</time>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo(id));
        }}
        className="px-4 py-1.5 inline-block rounded-full bg-red-400 text-white transition hover:bg-red-500"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
