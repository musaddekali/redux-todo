import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "./todoSlice";
import { Button, TextField } from "@mui/material";

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
      style={{
        padding: "1.5rem",
        marginBottom: "1.5rem",
        borderRadius: ".5rem",
        boxShadow: "0 2px 8px rgb(0 0 0/20%)",
      }}
    >
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        variant="outlined"
        label="Add Item"
        type="text"
        id="text"
        size="small"
        fullWidth
        sx={{
          marginBottom: "1rem",
          "& .MuiInputBase-root": {
            borderRadius: 9999,
          },
        }}
      />
      <div className="text-right">
        <Button type="submit" sx={{ borderRadius: 9999 }} variant="contained">
          Add
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
