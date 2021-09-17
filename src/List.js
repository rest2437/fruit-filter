import React from "react";

function List(props) {
  const fruitItems = props.fruits.map((fruit, idx) => {
    return <li key={idx}>{fruit}</li>;
  });

  return <ul>{fruitItems}</ul>;
}

export default List;
