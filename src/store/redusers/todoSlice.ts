import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../models/IList';

interface FilterState {
    list: IList[]
}

const initialState: FilterState = {
    list: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
        state.list.push({
            text: action.payload,
            id: new Date().toISOString(),
            completed: false,
        });
    },
    toggleComplete(state, action: PayloadAction<string>) {
        const toggledTodo = state.list.find(todo => todo.id === action.payload)
        if (toggledTodo) {
            toggledTodo.completed = !toggledTodo.completed
        }   
    },
    removeTodo(state, action: PayloadAction<string>) {
        state.list = state.list.filter(todo => todo.id !== action.payload);
    }
  },
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions

export default todoSlice.reducer