import { useState } from "react";

export default function Gamer() {
  const cssStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid red",
    borderRadius: "10px",
  };
  const [count, setCount] = useState(0);
  const addcounter = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const removecounter = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={cssStyle}>
      <h1>Count : {count}</h1>
      <button onClick={addcounter}>Add Number</button>
      <button onClick={removecounter}>Decrease Number</button>
    </div>
  );
}
