import React, { memo } from "react";
import styles from "./FeatureCards.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AllFeatures() {
  const data = ["ارائه گزارش عملکرد", "توصیه های بهبود سرعت"];

  return (
    <div className={`${styles.wrapper} pt-14 w-full max-w-[60rem] mx-auto px-6 flex flex-nowrap items-start justify-start max-md:items-start`}>
      <h2 className="font-bold max-md:text-[1.375rem] md:text-2xl w-full mb-14">تمام ویژگی ها</h2>
      {data.map((item, index) => {
        return (
          <div key={index} className={`${styles.card} max-md:w-full my-3 md:w-[26.25rem]`}>
            <FontAwesomeIcon className={`${styles.icon} w-fit`} icon={faCheck} />
            <p className="whitespace-nowrap font-medium flex-grow">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default memo(AllFeatures);
