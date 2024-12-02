import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-4">
      <h3>Counter Demo</h3>
      <p>Count: {count}</p>
      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
