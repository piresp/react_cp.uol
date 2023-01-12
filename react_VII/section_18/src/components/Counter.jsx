import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
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
        <button onClick={increaseHandler}>+10</button>
        <button onClick={resetHandler}>reset</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
