import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
})

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
