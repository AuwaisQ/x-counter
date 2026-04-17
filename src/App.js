import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter-card">
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
