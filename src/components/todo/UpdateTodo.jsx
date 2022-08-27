import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeUpdateModel, updateTodo } from "./todoSlice";

const UpdateTodo = () => {
  const [text, setText] = useState("");
  const { isEdit, editItem } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a valid item");
      return;
    }
    if (isEdit && editItem) {
      dispatch(updateTodo({ id: editItem.id, text }));
    }
    dispatch(closeUpdateModel());
    setText("");
  };

  useEffect(() => {
    if (isEdit) {
      setText(editItem.text);
    }
  }, [isEdit, editItem]);

  return (
    <div className="update-todo grid place-items-center fixed top-0 left-0 right-0 bottom-0 bg-gray-700/50">
      <div className="container">
        <div className="p-4 mb-8 border rounded-lg  bg-white shadow">
          <div className="text-right">
            <button
              onClick={() => dispatch(closeUpdateModel())}
              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Cencle
            </button>
          </div>
          <form onSubmit={handleFormSubmit} className="">
            <label htmlFor="update-text" className="block mb-4">
              <span className="block text-center mb-2">Update Item</span>
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="w-full py-1.5 px-4 border border-teal-300 rounded-full outline-none hover:bg-slate-100 focus:border-teal-500"
                type="text"
                id="update-text"
              />
            </label>
            <div className="text-right">
              <button className="px-6 py-1.5 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
