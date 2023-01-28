import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-24 md:px-20 max-md:px-4 w-[95%] max-w-[60rem] mx-auto bg-[#fafafa] rounded-[20px] flex-center flex-col">
      <h2 className="text-center font-bold max-md:text-2xl md:text-4xl">سوالات متداول</h2>
      <p className="mt-8 mr-8 mb-3 ml-0 text-[#505050] text-[0.8125rem] font-medium self-start">بهینه سازی صفحه</p>
      <div onClick={() => setOpen((prev) => !prev)} className="border-t border-b border-[#e6e6e6] w-full py-3 px-8 cursor-pointer flex-center transition-all duration-300 hover:border-primary flex-col">
        <div className="flex-center pb-8">
          <h3 className="font-medium text-lg flex-grow">اگر قبلاً یک افزونه کش مانند WP Rocket یا W3 Total Cache داشته باشم به Hummingbird نیاز دارم؟ اگر سرویس کش قبلاً توسط میزبانی من ارائه شده باشد چه می شود؟</h3>
          <FontAwesomeIcon icon={faPlus} className="w-[0.625rem]" />
        </div>
        <p className={`text-[0.9375rem] font-medium text-[#505050] ${open ? "FaqOpen" : "FaqClose"}`}>آره! البته، مجموعه کش ما بیش از اندازه کافی است، اما اگر قبلاً از WP Rocket، W3 Total Cache استفاده می‌کنید، یا اگر میزبانی شما این ویژگی‌ها را ارائه می‌دهد، ابزارهای نظارتی ویژه‌ای که مرغ مگس خوار ارائه می‌دهد همچنان ارزش آن را دارد. برای اطمینان از سازگاری، فقط ویژگی‌های همپوشانی را در یکی از ابزارهای کش فعال کنید</p>
      </div>
    </section>
  );
}

export default FAQ;
