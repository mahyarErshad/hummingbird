import React, { memo } from "react";
import FeaturesCard from "../Utils/FeaturesCard/FeaturesCard";

function Features() {
  return (
    <section className="max-md:mt-8 md:mt-12 pb-8 max-md:pt-8 md:pt-28 flex justify-start flex-col max-sm:px-8 max-lg:px-12 lg:px-[25%] items-center w-full bg-[#FAF9F5]">
      <h2 className="font-bold max-md:text-2xl md:text-4xl max-md:mb-8 md:mb-12 lg:mb-28">ویژگی ها</h2>
      <FeaturesCard title="تست و گزارش عملکرد" list={["نتایج دسکتاپ و موبایل", "معیارهای سایت را رصد کنید", "مشاهده معیارهای تایید شده/شکست خورده", "گزارش تجربه کاربر کروم"]} />
      <FeaturesCard title="نظارت و بهینه سازی زمان پاسخ" list={["مطمئن شوید که سایت های شما به روز هستند", "نظارت بر زمان پاسخ سرور", "تنظیم دوره زمانی گزارش"]} />
      <FeaturesCard title="تست های سرعت را اجرا کنید" list={["تست گوگل سرعت صفحه ​​را اجرا کنید", "ممیزی های PS + معیارهای عبور / شکست", "توصیه های PS را برطرف کنید", "چشم اندازهای فوری دریافت کنید"]} />
    </section>
  );
}

export default memo(Features);
