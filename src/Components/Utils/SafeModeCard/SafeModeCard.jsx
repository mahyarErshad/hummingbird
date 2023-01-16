import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SafeModeCard({ text }) {
  return (
    <div className="flex-center py-2 px-4 border-[1px] border-[#e6e6e6] w-fit rounded-[30px] gap-2">
      <FontAwesomeIcon className="text-base font-light" icon={faCheck} />
      <span className="font-bold text-sm flex-grow">{text}</span>
    </div>
  );
}

export default SafeModeCard;
