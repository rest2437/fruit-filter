import React from "react";
import "./App.css";
import FruitContainer from "./FruitContainer";

function App() {
  let fruitArr = [
    "apple 🍎",
    "banana🍌",
    "grape 🍇",
    "kiwi 🥝",
    "pineapple 🍍",
    "dragonfruit🐲",
    "mango🥭",
  ];
  return (
    <div className="App">
      <FruitContainer fruits={fruitArr} />
    </div>
  );
}

export default App;
