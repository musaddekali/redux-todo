import { Container, Typography, Box, Button } from "@mui/material";
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
        <Container sx={{ py: 4, textAlign: "center" }}>
          <Typography gutterBottom variant="body1" color="primary">
            Created with React, Redux, Firebase and Material UI
          </Typography>
          <Typography variant="h5" color="error" gutterBottom fontWeight={700}>
            Same Todo with another library.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="https://redux-todo1.netlify.app"
            >
              Tailwind CSS
            </Button>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="https://redux-bs-todo1.netlify.app"
            >
              Bootstrap 5
            </Button>
            <Button
              variant="contained"
              color="warning"
              component="a"
              href="https://redux-mui-todo1.netlify.app"
            >
              Material UI
            </Button>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Todo;
