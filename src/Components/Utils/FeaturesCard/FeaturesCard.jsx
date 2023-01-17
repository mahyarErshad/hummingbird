import React, { memo } from "react";

function FeaturesCard(props) {
  return (
    <div className="featureCards w-full px-6 py-8 border-b border-[#e6e6e6] flex items-start justify-start max-md:flex-col max-md:items-start max-md:gap-4 md:gap-8">
      <h3 className="font-bold max-md:text-[1.375rem] md:text-2xl max-md:w-full w-2/4">{props.title}</h3>
      <ul className="list-disc max-md:w-full w-2/4">
        {props.list.map((item, index) => {
          return (
            <li key={index} className="text-base mt-2 max-md:mr-8 font-medium text-[#505050]">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(FeaturesCard);
