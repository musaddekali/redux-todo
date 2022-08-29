import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase.config";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoRealtimeUpdate } from "./todoSlice";
import UpdateTodo from "./UpdateTodo";

const Todo = () => {
  const { isOpen } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Get todos realtime update
  useEffect(() => {
    const todoRef = query(
      collection(db, "todos"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(
      todoRef,
      (snapshot) => {
        let data = [];
        snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
        dispatch(todoRealtimeUpdate(data));
      },
      (error) => {
        console.log("Realtime getting problem -> ", error);
      }
    );
    return () => unsub();
  }, [dispatch]);

  return (
    <>
      <div className="container todo">
        <h1 className="h4 text-info text-center mb-4">Daily Notes</h1>
        <TodoForm />
        <TodoList />
        {isOpen && <UpdateTodo />}
      </div>
      <footer className="footer">
        <div className="container py-3">
          <p className="text-center text-info">
            Created with React, Redux, Firebase and Bootstrap 5.
          </p>
          <h4 className="mb-3 text-danger fw-bold">
            Same Todo with another library.
          </h4>
          <div className="d-flex flex-wrap gap-2">
            <a
              href="https://redux-todo1.netlify.app"
              className="btn btn-success px-3 py-1 rounded-pill"
            >
              Tailwind CSS
            </a>
            <a
              href="https://redux-bs-todo1.netlify.app"
              className="btn btn-secondary px-3 py-1 rounded-pill"
            >
              Bootstrap 5
            </a>
            <a
              href="https://redux-mui-todo1.netlify.app"
              className="btn btn-success px-3 py-1 rounded-pill"
            >
              Material UI
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Todo;
