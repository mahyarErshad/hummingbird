import React from "react";
import { ReactComponent as Wheat } from "../../../assets/images/wheat.svg";

function Carousel() {
  return (
    <div className="max-w-[58.75rem] mx-auto flex-center gap-5 mt-20">
      <button>
        <Wheat className="flip" fill="#1B6169" />
      </button>
      <button>
        <Wheat fill="#1B6169" />
      </button>
    </div>
  );
}

export default Carousel;
