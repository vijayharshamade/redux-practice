// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "./features/counter";
// import todoReducer from "./features/todos";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todo: todoReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import todoReducer from "./features/todos";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;
