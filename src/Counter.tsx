import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>This is cool</p>
      count: {count}
      <button onClick={() => setCount((x) => x + 1)}>+</button>
      <button onClick={() => setCount((x) => x - 1)}>-</button>
    </>
  );
};
