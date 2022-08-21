import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { isEdit, editItem } = useSelector((state) => state.todos);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo(value));
    setValue("");
  };

  useEffect(() => {
    if (isEdit) {
      if (editItem) {
        setValue(editItem.title);
      }
    }
  }, [isEdit, editItem]);

  return (
    <form onSubmit={handleFormSubmit} className="p-4 shadow border rounded-md">
      <label htmlFor="title">
        Title
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="rounded border-2"
          type="text"
        />
      </label>
      <button className="px-4 py-2 text-sm rounded-md bg-sky-400 text-white hover:bg-sky-500 transition">
        {isEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
