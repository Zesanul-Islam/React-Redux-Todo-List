import { createSlice } from "@reduxjs/toolkit"

function getSavedTodos(){
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {todos: getSavedTodos()},
  reducers: {
    addTodo(state, action){
      state.todos.push( action.payload );
    },
    deleteTodo(state, action){
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo(state, action){
      state.todos.map(todo => (todo.id === action.payload) ? todo.isCompleted = !todo.isCompleted : null);
    },
    saveTodo(state, action){
      state.todos.map(todo => (todo.id === action.payload.id) ? todo.message = action.payload.message : null);
    },
    clearAllTodo(state){
      state.todos = [];
    },
  }
});

export const { addTodo, deleteTodo, toggleTodo, clearAllTodo, saveTodo } = todoSlice.actions;
export default todoSlice.reducer;