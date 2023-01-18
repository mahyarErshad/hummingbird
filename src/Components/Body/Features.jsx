import React, { memo } from "react";
import FeaturesCard from "../Utils/FeaturesCard/FeaturesCard";

function Features() {
  return (
    <section id="features" className="max-md:mt-8 md:mt-12 pb-8 max-md:pt-8 md:pt-28 flex justify-start flex-col items-center w-full bg-[#FAF9F5]">
      <h2 className="font-bold max-md:text-2xl md:text-4xl max-md:mb-8 md:mb-12 lg:mb-28">ویژگی ها</h2>
      <FeaturesCard title="تست و گزارش عملکرد" list={["نتایج دسکتاپ و موبایل", "معیارهای سایت را رصد کنید", "مشاهده معیارهای تایید شده/شکست خورده", "گزارش تجربه کاربر کروم"]} />
      <FeaturesCard title="نظارت و بهینه سازی زمان پاسخ" list={["مطمئن شوید که سایت های شما به روز هستند", "نظارت بر زمان پاسخ سرور", "تنظیم دوره زمانی گزارش"]} />
      <FeaturesCard title="تست های سرعت را اجرا کنید" list={["تست گوگل سرعت صفحه ​​را اجرا کنید", "ممیزی های PS + معیارهای عبور / شکست", "توصیه های PS را برطرف کنید", "چشم اندازهای فوری دریافت کنید"]} />
      <FeaturesCard title="مجموعه ذخیره کامل" list={["ذخیره داده های موقت در دستگاه بازدید کننده", "با یک کلیک فعال کنید", "ذخیره صفحه", "حافظه پنهان مرورگر", "ذخیره سازی گراواتار", "ذخیره سازی RSS", "اتوماتیک یا دستی", "CloudFlare CDN"]} />
      <FeaturesCard title="بهینه سازی کامل منابع" list={["فشرده سازی و سازماندهی بهتر منابع", "بهبود سرعت بارگذاری صفحه", "حالت بهینه سازی خودکار یا دستی", "اضافه / حذف فایل های خاص", "WPMU DEV CDN را فعال کنید", "حالت ایمن برای آزمایش تغییرات", "فشرده سازی فوق العاده فایل ها", "مشاهده کاهش حجم فایل"]} />
      <FeaturesCard title="فشرده سازی GZIP" list={["صفحات وب و شیوه نامه ها را فشرده کنید", "کاهش زمان انتقال فایل", "پیکربندی خودکار برای میزبانی WPMU DEV", "CSS, JavaScript, HTML"]} />
    </section>
  );
}

export default memo(Features);
