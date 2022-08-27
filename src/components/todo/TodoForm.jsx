import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "./todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a valid item");
      return;
    }
    dispatch(setTodo(text));
    setText("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="border p-3 rounded shadow-sm mb-4"
    >
      <label htmlFor="text" className="d-block text-center">
        <span className="d-inline-block mb-2">Add Item</span>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="form-control rounded-pill mb-3"
          type="text"
          id="text"
          placeholder="Add Item..."
        />
      </label>
      <div className="text-end">
        <button className="btn btn-success px-3 py-1 rounded-pill">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
