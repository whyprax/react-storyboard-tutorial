import React from "react";
import "./Input.css";

const Input = (props) => {
  const { variant, children, ...restProps } = props;
  return (
    <input
      className={`input ${variant}`}
      {...restProps}
      placeholder="Input here"
    />
  );
};

export default Input;
