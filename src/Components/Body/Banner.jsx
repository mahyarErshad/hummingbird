import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";

function Banner() {
  return (
    <section className="banner-wrapper flex-center max-lg:w-[90%] lg:w-[65%] lg:h-[25rem]">
      <BannerImage />
      <p>سایت های وردپرسی سریع تر، سبک تر و بهینه تری داشته باشید.</p>
    </section>
  );
}

export default memo(Banner);
