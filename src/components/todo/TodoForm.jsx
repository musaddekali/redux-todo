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
      className="p-4 mb-8 border rounded-lg shadow"
    >
      <label htmlFor="text" className="block mb-4">
        <span className="block text-center mb-2">Add Item</span>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full py-1.5 px-4 border border-teal-300 rounded-full outline-none hover:bg-slate-100 focus:border-teal-500"
          type="text"
          id="text"
          placeholder="Add Item..."
        />
      </label>
      <div className="text-right">
        <button className="px-6 py-1.5 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
