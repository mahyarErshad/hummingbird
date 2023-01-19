import React from "react";
import styles from "./FeatureCards.module.css"

function AllFeatures() {
  return (
    <div className={`${styles.wrapper} pt-14 w-full max-w-[60rem] mx-auto px-6 flex items-start justify-start max-md:flex-col max-md:items-start max-md:gap-4 md:gap-8`}>
      <h2 className="font-bold max-md:text-[1.375rem] md:text-2xl max-md:w-full w-2/4">تمام ویژگی ها</h2>
      <div className={styles.card}>

      </div>
    </div>
  );
}

export default AllFeatures;
