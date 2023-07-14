import React, { useState, useCallback } from "react";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default ParentComponent;
