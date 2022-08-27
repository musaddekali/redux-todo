import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);

  if (loading) {
    return (
      <h1 className="py-8 text-center text-blue-500 text-3xl">Loading...</h1>
    );
  }

  if (!loading && error) {
    return <h1 className="py-8 text-center text-blue-500 text-3xl">{error}</h1>;
  }

  return (
    <ul className="list-unstyled d-grid gap-2">
      {!todos.length ? (
        <h1 className="py-5 text-center text-info h2">Empty</h1>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} number={index + 1} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
