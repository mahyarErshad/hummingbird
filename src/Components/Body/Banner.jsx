import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";

function Banner() {
  return (
    <>
      <section className="banner-wrapper flex items-center max-md:justify-center gap-4 justify-between max-lg:flex-col w-full h-[25rem]">
        <p className="font-bold max-md:text-3xl md:text-[2.5rem] flex-shrink-0 text-white max-lg:w-full w-[50%]">سایت های وردپرسی سریع تر، سبک تر و بهینه تری داشته باشید.</p>
        <BannerImage className="max-md:hidden" />
      </section>
    </>
  );
}

export default memo(Banner);
