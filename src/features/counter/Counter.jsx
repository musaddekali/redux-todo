import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex">
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
      >
        Decrement -
      </button>
      <h4 className="text-xl text-red-500 p-2">{count}</h4>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
      >
        Increment +
      </button>
      <button
        onClick={() => dispatch(incrementBy(5))}
        className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
      >
        Increment 5+
      </button>
    </div>
  );
};

export default Counter;
