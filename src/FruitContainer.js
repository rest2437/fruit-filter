import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

function FruitContainer(props) {
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  const [filterValue, setFilterValue] = useState("");
  function handleFilterChange(e) {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);

    // remove fruits that don't contain the filter value
    const filteredFruitList = props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(newValue.toLowerCase());
    });

    setFruitsToDisplay(filteredFruitList);
  }

  return (
    <div>
      <Input value={filterValue} onChange={handleFilterChange} />
      <List fruits={fruitsToDisplay} />
    </div>
  );
}
export default FruitContainer;
