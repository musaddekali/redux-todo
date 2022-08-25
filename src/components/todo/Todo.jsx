import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase.config";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoRealtimeUpdate } from "./todoSlice";

const Todo = () => {
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
      </div>
      <footer className="footer">
        <div className="container py-8">
          <p className="text-md text-sky-500 text-center">
            Created with React, Redux, Firebase and Tailwind css.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Todo;
