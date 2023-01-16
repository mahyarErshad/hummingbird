import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";
import fiveStars from "../../assets/images/fiveStars.jpg";
import trustPilot from "../../assets/images/trustPilot.JPG";
import responseTime from "../../assets/images/ResponseTime.svg";

function Banner() {
  return (
    <>
      <section className="banner-wrapper flex items-center max-md:justify-center gap-4 justify-between max-lg:flex-col w-full h-[25rem]">
        <p className="font-bold max-md:text-3xl md:text-[2.5rem] flex-shrink-0 text-white max-lg:w-full w-[50%]">سایت های وردپرسی سریع تر، سبک تر و بهینه تری داشته باشید.</p>
        <BannerImage className="max-md:hidden" />
      </section>
      <div className="w-full flex-center gap-2 flex-wrap mb-24">
        <p className="text-sm whitespace-nowrap">مشتری های ما میگن</p>
        <strong className="text-base">عالی</strong>
        <img src={fiveStars} alt="rating" className="max-md:hidden" />
        <p className="text-sm whitespace-nowrap">4.9 از 5 طبق 2500 نظر در</p>
        <img src={trustPilot} alt="Trust Pilot" />
      </div>
      <div className="flex-center max-md:flex-col gap-8">
        <div className="w-2/4 max-md:flex-center flex flex-col gap-4 max-md:w-full">
          <p className="max-md:text-base md:text-2xl font-bold">مجموعه عملکرد نهایی</p>
          <p className="max-md:text-base md:text-2xl">یک داشبورد مرکزی برای نظارت، تجزیه و تحلیل و بهینه سازی عملکرد تمام وب سایت های شما.</p>
        </div>
        <div className="w-2/4 max-md:w-full">
          <img src={responseTime} alt="response time" className="shadow-md mx-auto" />
        </div>
      </div>
    </>
  );
}

export default memo(Banner);
