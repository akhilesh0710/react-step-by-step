import React from "react";

const ChildValue = (props) => {
  const square = (num) => {
    return num * num;
  };

  return (
    <h1>
      The Square of {props.number} is = {square(props.number)}
    </h1>
  );
};

export default ChildValue;
