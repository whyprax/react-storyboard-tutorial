import React from "react";
import "./Button.css";

const Button = (props) => {
  const { variant = "primary", children, ...restProps } = props;
  return (
    <button className={`button ${variant}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
