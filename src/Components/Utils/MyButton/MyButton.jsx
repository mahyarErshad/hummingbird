import React from "react";

function MyButton({ text, onClick, className }) {
  return (
    <button className={`transition-all duration-300 border rounded-lg hover:shadow-md active:shadow-sm py-4 max-sm:w-full px-8 hover:opacity-90 text-white ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton;
