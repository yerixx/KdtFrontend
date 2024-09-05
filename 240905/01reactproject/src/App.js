import "./App.css";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditer />
      <div>Todo List</div>
    </div>
  );
}

export default App;
