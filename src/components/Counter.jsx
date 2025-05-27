import { increment, decrement, reset } from "../features/counter";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  //console.log(count);

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onIncrement = () => {
    dispatch(increment());
  };

  const onReset = () => {
    dispatch(reset());
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={onDecrement}>decrement</button>
      <p>{count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
