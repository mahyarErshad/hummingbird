import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";

function Banner() {
  return (
    <section className="banner-wrapper max-lg:w-[90%] lg:w-[65%] lg:h-[25rem]">
      <BannerImage />
    </section>
  );
}

export default memo(Banner);
