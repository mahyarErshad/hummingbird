import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";
import fiveStars from "../../assets/images/fiveStars.jpg";
import trustPilot from "../../assets/images/trustPilot.JPG";

function Banner() {
  return (
    <>
      <section className="banner-wrapper flex items-center max-md:justify-center gap-4 justify-between max-lg:flex-col w-full h-[25rem]">
        <p className="font-bold max-md:text-3xl md:text-[2.5rem] flex-shrink-0 text-white max-lg:w-full w-[50%]">سایت های وردپرسی سریع تر، سبک تر و بهینه تری داشته باشید.</p>
        <BannerImage className="max-md:hidden" />
      </section>
      <div className="w-full flex-center gap-3 flex-wrap">
        <p className="text-sm whitespace-nowrap">مشتری های ما میگن</p>
        <strong className="text-base">عالی</strong>
        <img src={fiveStars} alt="rating" />
        <p className="text-sm whitespace-nowrap">4.9 از 5 طبق 2500 نظر در</p>
        <img src={trustPilot} alt="Trust Pilot" />
      </div>
    </>
  );
}

export default memo(Banner);
