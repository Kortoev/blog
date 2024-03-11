import React from "react";
import cls from "./Button.module.css";

const Button = (props) => {
  return <button className={cls.button}>{props.value}</button>;
};

export default Button;
