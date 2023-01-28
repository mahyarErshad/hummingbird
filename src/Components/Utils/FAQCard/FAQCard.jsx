import React, { memo, useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FAQCard({ title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <figure onClick={() => setOpen((prev) => !prev)} className="border-t border-b border-[#e6e6e6] w-full py-3 px-8 cursor-pointer flex transition-all duration-300 hover:border-primary hover:text-primary flex-col">
      <div className="flex justify-start items-center text-inherit">
        <h3 className="font-medium text-lg flex-grow text-black">{title}</h3>
        <FontAwesomeIcon icon={open ? faMinus : faPlus} className="w-[0.625rem]" />
      </div>
      <p className={`text-[0.9375rem] font-medium text-[#505050] ${open ? "FaqOpen" : "FaqClose"}`}>{description}</p>
    </figure>
  );
}

export default memo(FAQCard);
