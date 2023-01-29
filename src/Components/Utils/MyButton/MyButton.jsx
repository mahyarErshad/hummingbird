import React from "react";

function MyButton({ text, onClick,className }) {
  return <button className={`${className}`} onClick={() => onClick}>{text}</button>;
}

export default MyButton;
