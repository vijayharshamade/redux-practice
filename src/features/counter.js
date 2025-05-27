// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     reset: (state) => {
//       state.value = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counerSlice.actions;
export default counerSlice.reducer;
