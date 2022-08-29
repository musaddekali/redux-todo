import { Container, Typography } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase.config";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoRealtimeUpdate } from "./todoSlice";
import UpdateTodo from "./UpdateTodo";

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
      <Container>
        <Typography variant="h5" color="primary" textAlign="center" mb={2}>
          Daily Notes
        </Typography>
        <TodoForm />
        <TodoList />
        {/* {isOpen && <UpdateTodo />} */}
        <UpdateTodo />
      </Container>
      <footer>
        <Container py={4}>
          <Typography
            variant="body1"
            color="primary"
            sx={{ textAlign: "center", py: 4 }}
          >
            Created with React, Redux, Firebase and Tailwind css.
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Todo;
