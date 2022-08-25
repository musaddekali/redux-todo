import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../components/todo/todoSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;