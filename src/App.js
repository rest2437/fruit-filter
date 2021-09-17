import React from "react";
import "./App.css";
import FruitContainer from "./FruitContainer";
// import ParticlesContainer from "./ParticlesContainer";
// import Particles from "react-particles-js";

function App() {
  let fruitArr = [
    "🍎 apple",
    "🍌 banana",
    "🍇 grape ",
    "🥝 kiwi ",
    "🍍 pineapple ",
    "🐲 dragonfruit",
    "🥭 mango",
  ];
  let veggiesArr = [
    "🍆 Eggplant",
    "🥕 Carrot",
    "🍅 Tomato",
    "🥔 Potato",
    "🥒 Cucumber",
    "🫑 Bell Pepper",
    "🥬 Leafy Green",
  ];
  let junkArr = [
    "burger 🍔",
    "hotdog 🌭",
    "fries 🍟",
    "pizza 🍕",
    "bacon 🥓",
    "donut 🍩",
    "candy 🍭",
  ];
  return (
    <div className="App">
      <div className="fruit">
        <FruitContainer fruits={fruitArr} />
      </div>
      <div className="veggie">
        <FruitContainer fruits={veggiesArr} />
      </div>
      <div className="junk">
        <FruitContainer fruits={junkArr} />
      </div>
      {/* </ParticlesContainer> */}
    </div>
  );
}

export default App;
