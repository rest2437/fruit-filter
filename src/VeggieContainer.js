import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

function VeggieContainer(props) {
  const [veggiesToDisplay, setVeggiesToDisplay] = useState(props.veggies);
  const [filterValue, setFilterValue] = useState("");
  function handleFilterChange(e) {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);

    // remove veggies that don't contain the filter value
    const filteredVeggieList = props.veggies.filter((veggie) => {
      return veggie.toLowerCase().includes(newValue.toLowerCase());
    });

    setVeggiesToDisplay(filteredVeggieList);
  }

  return (
    <div>
      <Input value={filterValue} onChange={handleFilterChange} />
      <List veggies={veggiesToDisplay} />
    </div>
  );
}
export default VeggieContainer;
