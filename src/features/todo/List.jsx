import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editMode } from "./todoSlice";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="space-y-2">
      {todos.map((item) => (
        <Item key={item.id} todo={item} />
      ))}
    </ul>
  );
};

const Item = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="p-2 shadow rounded hover:bg-slate-200">
      {todo.title}
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="p-2 rounded bg-red-400 text-white hover:bg-red-500 transition"
      >
        Delete
      </button>
      <button
        onClick={() => dispatch(editMode(todo.id))}
        className="p-2 rounded bg-red-400 text-white hover:bg-red-500 transition"
      >
        Update
      </button>
    </li>
  );
};

export default List;
