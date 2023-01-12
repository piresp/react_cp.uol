import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      }
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter
      }
    case 'reset':
      return {
        counter: state.counter = 0,
        showCounter: state.showCounter
      }
    case 'toggle':
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      }
    default:
  }

  return state;
}

const store = createStore(counterReducer);

export default store;