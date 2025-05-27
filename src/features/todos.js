// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [],
// };

// const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: action.payload + Math.random(),
//         text: action.payload,
//       };
//       state.todos.push(newTodo);
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, deleteTodo } = todosSlice.actions;
// export default todosSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload + Math.random(),
        text: action.payload,
        isChecked: false, // ✅ added default
      };
      state.todos.push(newTodo);
    },
    checkTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isChecked = !todo.isChecked; // toggle
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
