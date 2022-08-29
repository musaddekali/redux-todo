import { List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);

  if (loading) {
    return (
      <Typography variant="h3" p={4} textAlign="center" color="primary">
        Loading...
      </Typography>
    );
  }

  if (!loading && error) {
    return (
      <Typography variant="h3" p={4} textAlign="center" color="primary">
        {error}
      </Typography>
    );
  }

  return (
    <List>
      {!todos.length ? (
        <Typography variant="h3" p={4} textAlign="center" color="primary">
          Empty
        </Typography>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} number={index + 1} />
        ))
      )}
    </List>
  );
};

export default TodoList;
