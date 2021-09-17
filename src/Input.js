import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor="fruit-filter">Filter these Fruits: </label>
      <input
        type="text"
        name="fruit-filter"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Input;
