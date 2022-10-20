import { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    console.log("Button mounted");

    return () => {
      console.log("Button unmounted");
    };
  });
  return <button>THIS IS A BUTTON</button>;
};

export default Button;
