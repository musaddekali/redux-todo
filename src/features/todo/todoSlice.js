import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: 1,
                title: 'Mahid'
            },
            {
                id: 2,
                title: 'Karim'
            }
        ],
        isEdit: false,
        editItem: null,
    },
    reducers: {
        addTodo: (state, action) => {
            // update todo
            if (state.isEdit && state.editItem) {
                const withUpdate = state.todos.map(item => {
                    if (item.id === state.editItem.id) {
                        return { ...item, title: action.payload }
                    }
                    return item;
                })
                state.todos = withUpdate;
                state.isEdit = false
                state.editItem = null
                return;
            }
            // add new todo
            state.todos = [...state.todos, { id: Date.now(), title: action.payload }]
        },
        removeTodo: (state, action) => {
            if (window.confirm('Want to delete?')) {
                state.todos = state.todos.filter(item => item.id !== action.payload)
            }
        },
        editMode: (state, action) => {
            state.isEdit = true
            state.editItem = state.todos.find(item => item.id === action.payload)
        },
    }
});

console.log(todoSlice.actions)

export const { addTodo, removeTodo, editMode } = todoSlice.actions;
export default todoSlice.reducer;