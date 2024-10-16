import Users from "./Users";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Gamer from "./Gamer";

function App() {
  function handleClick() {
    alert("Btn clicked");
  }
  const handle2 = () => {
    alert("clicked 2 btn");
  };
  // প্যাচানো টাইপ
  const handleBtn4 = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core Concept 2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handle2}>Click 2</button>
      <button
        onClick={() => {
          alert("btn 3 clicked");
        }}
      >
        Btn 3
      </button>
      {/* প্যাচানো সিস্টেম */}
      <button onClick={() => handleBtn4(5)}>Btn 4</button>

      {/*  Counter, Team, Gamer ৩ টাতে সেম কাজ করেছি */}
      <Counter></Counter>
      {/* <Team></Team> */}
      {/* <Gamer></Gamer> */}
     


     
     </>
  );
}

export default App;
