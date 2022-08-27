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
    <div className="update-todo d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0 bg-secondary">
      <div className="container">
        <div className="p-2 mb-4 border rounded  bg-white shadow-sm">
          <div className="text-end">
            <button
              onClick={() => dispatch(closeUpdateModel())}
              className="btn btn-danger"
            >
              Cencle
            </button>
          </div>
          <form onSubmit={handleFormSubmit} className="">
            <label htmlFor="text" className="d-block text-center">
              <span className="d-inline-block mb-2">Update Item</span>
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="form-control rounded-pill mb-3"
                type="text"
                id="text"
              />
            </label>
            <div className="text-end">
              <button className="btn btn-info px-3 py-1 rounded-pill">
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
