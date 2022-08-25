import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

export const setTodo = createAsyncThunk('todos/setTodo', async (todoText) => {
    try {
        const ref = collection(db, 'todos');
        const data = {
            text: todoText,
            isCompleted: false,
            createdAt: Timestamp.fromDate(new Date())
        }
        await addDoc(ref, data);
    } catch (error) {
        console.log('Todo set firebase problem -> ', error);
    }
})

export const toggleComplete = createAsyncThunk('todos/toggleComplete', async (id) => {
    try {
        const ref = doc(db, 'todos', id);
        const selectedTodo = await getDoc(ref);
        await updateDoc(ref, { isCompleted: !selectedTodo.data().isCompleted });
    } catch (error) {
        console.log('Todo firebase update problem -> ', error);
    }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    if (window.confirm('Do you wanna delete this?')) {
        try {
            const ref = doc(db, 'todos', id);
            await deleteDoc(ref);
        } catch (error) {
            console.log('Todo firebase delete problem -> ', error)
        }
    }
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    reducers: {
        todoRealtimeUpdate: (state, action) => {
            state.todos = action.payload
            state.loading = false
            state.error = null
        },
    },
});

export const { addTodo, removeTodo, todoRealtimeUpdate } = todoSlice.actions;
export default todoSlice.reducer;