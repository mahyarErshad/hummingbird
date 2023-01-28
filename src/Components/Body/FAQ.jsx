import React from "react";
import FAQCard from "../Utils/FAQCard/FAQCard";

function FAQ() {
  return (
    <section className="py-24 md:px-20 max-md:px-4 w-[95%] max-w-[60rem] mx-auto bg-[#fafafa] rounded-[20px] flex-center flex-col mb-12">
      <h2 className="text-center font-bold max-md:text-2xl md:text-4xl">سوالات متداول</h2>
      <p className="mt-8 mr-8 mb-3 ml-0 text-[#505050] text-[0.8125rem] font-medium self-start">بهینه سازی صفحه</p>
      <FAQCard title="اگر قبلاً یک افزونه کش مانند WP Rocket یا W3 Total Cache داشته باشم به Hummingbird نیاز دارم؟ اگر سرویس کش قبلاً توسط میزبانی من ارائه شده باشد چه می شود؟" description="آره! البته، مجموعه کش ما بیش از اندازه کافی است، اما اگر قبلاً از WP Rocket، W3 Total Cache استفاده می‌کنید، یا اگر میزبانی شما این ویژگی‌ها را ارائه می‌دهد، ابزارهای نظارتی ویژه‌ای که مرغ مگس خوار ارائه می‌دهد همچنان ارزش آن را دارد. برای اطمینان از سازگاری، فقط ویژگی‌های همپوشانی را در یکی از ابزارهای کش فعال کنید" />
    </section>
  );
}

export default FAQ;
