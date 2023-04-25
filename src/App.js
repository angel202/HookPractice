import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const GrabText = (event) => {
    setText(event.target.value);
  };

  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };
  const Zero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <input onChange={GrabText} />
      {text}

      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Zero}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
