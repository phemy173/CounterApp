import { useState } from "react";
import "./CounterComponent.css"; // Optional: for external styling

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <h2>Student Enrollment Counter</h2>
      <div className="counter-value">{count}</div>

      {count >= limit && <p className="limit-msg">You've reached the limit!</p>}

      <div className="button-group">
        <button onClick={increase} className="btn">Increase</button>
        <button onClick={decrease} className="btn" disabled={count === 0}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
