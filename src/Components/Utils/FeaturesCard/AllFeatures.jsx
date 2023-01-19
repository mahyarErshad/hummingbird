import React from "react";
import styles from "./FeatureCards.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AllFeatures() {
  return (
    <div className={`${styles.wrapper} pt-14 w-full max-w-[60rem] mx-auto px-6 flex items-start justify-start flex-wrap max-md:items-start max-md:gap-4 md:gap-8`}>
      <h2 className="font-bold max-md:text-[1.375rem] md:text-2xl w-full mb-14">تمام ویژگی ها</h2>
      <div className={`${styles.card} max-md:w-full md:w-2/4`}>
        <FontAwesomeIcon className={`${styles.icon} max-md:w-full md:w-2/4 `} icon={faCheck} />
        <p className="whitespace-nowrap font-medium">ارائه گزارش عملکرد</p>
      </div>
    </div>
  );
}

export default AllFeatures;
