import React, { memo } from "react";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg";
import fiveStars from "../../assets/images/fiveStars.jpg";
import trustPilot from "../../assets/images/trustPilot.JPG";
import responseTime from "../../assets/images/ResponseTime.svg";
import speedTest from "../../assets/images/speedTest.svg";
import performance from "../../assets/images/performance.svg";
import caching from "../../assets/images/caching.svg";
import safeMode from "../../assets/images/safeMode.svg";
import SafeModeCard from "../Utils/SafeModeCard/SafeModeCard";

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
          <img src={responseTime} alt="response time" className="shadow-lg mx-auto" />
        </div>
      </div>
      <div className="flex max-md:flex-center md:items-start md:justify-between w-full max-md:flex-col max-md:gap-4 md:gap-8 max-md:mt-6 md:mt-8">
        <div className="w-2/4 max-md:w-full">
          <img src={speedTest} alt="response time" className="shadow-lg mx-auto" />
        </div>
        <div className="w-2/4 max-md:w-full flex flex-col max-md:gap-6 md:gap-8">
          <img src={performance} alt="response time" className="shadow-lg mx-auto w-full" />
          <img src={caching} alt="response time" className="shadow-lg mx-auto w-full" />
        </div>
      </div>
      <div className="flex-center max-md:flex-col md:gap-8 md:min-h-[21.875rem] mt-8">
        <div className="w-2/4 max-md:flex-center flex flex-col gap-4 max-md:w-full">
          <p className="max-md:text-base md:text-2xl font-bold">بهینه سازی آسان و ایمن</p>
          <p>به راحتی فایل های HTML، جاوا اسکریپت و CSS را که می توانند فشرده، ترکیب یا جابجا شوند تا عملکرد را به حداکثر برسانند را شناسایی کنید. قبل از اجرای زنده با حالت ایمن داخلی، تغییرات را آزمایش کنید.</p>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            <SafeModeCard text="اتوماتیک یا دستی" />
            <SafeModeCard text="عملکرد حداکثری" />
            <SafeModeCard new text="حالت ایمن" />
            <SafeModeCard text="فایل های فوق فشرده" />
            <SafeModeCard text="خدمت رسانی از طریق CDN" />
          </div>
        </div>
        <div className="w-2/4 max-md:w-full">
          <img src={safeMode} alt="response time" className="mx-auto" />
        </div>
      </div>
    </>
  );
}

export default memo(Banner);
