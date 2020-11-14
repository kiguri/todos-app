import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                text: action.payload,
                completed: false,
                id: Math.trunc(Math.random() * 10000)
            })
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;


