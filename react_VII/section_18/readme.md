## Section 18 - Redux
Here is where the kid cry and the mom dont see

### Old Way - Redux

#### Creating store:
```js
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
```

### Applying:

```js
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const resetHandler = () => {
    dispatch({ type: "reset" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {show && <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={decrementHandler}>-</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

```

### Old Way - Redux Toolkit

#### Creating store:

```js
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
```

#### Applying :

```js
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {show && <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>10</button>
        <button onClick={resetHandler}>reset</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

```