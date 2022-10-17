import React from "react";
import ReactDOM from "react-dom/client";
import Task from "./components/Task";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <Task specs={{ name: "react", color: "blue" }} time="10 hrs" />
  </div>
);
