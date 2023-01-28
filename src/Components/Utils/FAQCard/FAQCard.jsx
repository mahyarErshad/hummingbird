import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FAQCard({ title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <figure>
      <div onClick={() => setOpen((prev) => !prev)} className="border-t border-b border-[#e6e6e6] w-full py-3 px-8 cursor-pointer flex-center transition-all duration-300 hover:border-primary flex-col">
        <div className="flex-center">
          <h3 className="font-medium text-lg flex-grow">{title}</h3>
          <FontAwesomeIcon icon={open ? faMinus : faPlus} className="w-[0.625rem]" />
        </div>
        <p className={`text-[0.9375rem] font-medium text-[#505050] ${open ? "FaqOpen" : "FaqClose"}`}>{description}</p>
      </div>
    </figure>
  );
}

export default FAQCard;
