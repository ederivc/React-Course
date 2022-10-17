import React from "react";
import style from "./task.module.css";

const Task = ({ specs: { name, color }, time }) => {
  return (
    <div className={`${style.container}`}>
      <h1>{name}</h1>
      <h1>{color}</h1>
      <strong>{time}</strong>
      <p>{[1, 2, 3]}</p>
    </div>
  );
};

export default Task;
