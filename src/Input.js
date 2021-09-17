import React from "react";

function Input(props) {
  return (
    <div className="search">
      <label className="title" htmlFor="fruit-filter">
        Filter these Foods:{" "}
      </label>
      <input
        className="search"
        type="text"
        name="fruit-filter"
        placeholder="Search here!"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Input;
