import React, { memo } from "react";
import FeaturesCard from "../Utils/FeaturesCard/FeaturesCard";

function Features() {
  return (
    <section className="max-md:mt-8 md:mt-12 pb-8 max-md:pt-8 md:pt-28 flex justify-start flex-col max-sm:px-8 max-lg:px-12 lg:pr-[25%] lg:pl-4 items-center w-full bg-[#FAF9F5]">
      <h2 className="font-bold max-md:text-2xl md:text-4xl">ویژگی ها</h2>
      <FeaturesCard title="تست و گزارش عملکرد" list={["نتایج دسکتاپ و موبایل", "معیارهای سایت را رصد کنید", "مشاهده معیارهای تایید شده/شکست خورده", "گزارش تجربه کاربر کروم"]} />
    </section>
  );
}

export default memo(Features);
