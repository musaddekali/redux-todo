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
        <h1 className="text-xl capitalize text-teal-500 text-center mb-6">
          Daily Notes
        </h1>
        <TodoForm />
        <TodoList />
        {isOpen && <UpdateTodo />}
      </div>
      <footer className="footer">
        <div className="container py-8">
          <p className="text-md text-sky-500 text-center mb-4">
            Created with React, Redux, Firebase and Tailwind css.
          </p>

          <h4 className="mb-3 text-red-500 font-bold">Same Todo with another library.</h4>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://redux-todo1.netlify.app"
              className="px-6 py-1.5 rounded-full bg-sky-800 text-white hover:bg-sky-500 transition"
            >
              Tailwind CSS
            </a>
            <a
              href="https://redux-bs-todo1.netlify.app"
              className="px-6 py-1.5 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition"
            >
              Bootstrap 5
            </a>
            <a
              href="https://redux-mui-todo1.netlify.app"
              className="px-6 py-1.5 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition"
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
