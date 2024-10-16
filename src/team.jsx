import { useState } from "react";

export default function Team() {
  const [setCount, updateCount] = useState(11);

  const handlerAddPlayer = () => {
    const newSetCount = setCount + 1;
    updateCount(newSetCount);
  };

  const handlerRemovePlayer = () => {
    const recentRemove = setCount - 1;
    updateCount(recentRemove);
  };

  const teamStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid yellow",
    borderRadius: "10px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players : {setCount}</h3>
      <button onClick={handlerAddPlayer}>Add Player</button>
      <button onClick={handlerRemovePlayer}>Remove Player</button>
    </div>
  );
}
