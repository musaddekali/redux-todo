import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl capitalize text-teal-500 text-center mb-6">Learn redux</h1>
      <Counter />
      <Todo/>
    </div>
  );
}

export default App;
